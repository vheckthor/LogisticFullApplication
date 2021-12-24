<?php

use App\Helpers\ResourceHelpers;
use Illuminate\Support\Str;
use Tymon\JWTAuth\Facades\JWTAuth;
use libphonenumber\PhoneNumberUtil;
use libphonenumber\PhoneNumberFormat;
use Illuminate\Support\Facades\Storage;
use libphonenumber\NumberParseException;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;


function getAuthenticatedUser()
{
    try {
        JWTAuth::parseToken()->authenticate();
        if (! $user = auth('api')->user()) {
                return response()->errorResponse('User not found', [], 404);
        }

    } catch (TokenExpiredException $e) {

        return response()->errorResponse('token_expired', ["token" => $e->getMessage()], 401);

    } catch (TokenInvalidException $e) {

        return response()->errorResponse('token_invalid', ["token" => $e->getMessage()], 401);

    } catch (JWTException $e) {

        return response()->errorResponse('token_absent', ["token" => $e->getMessage()], 401);

    }

    return ResourceHelpers::returnUserData($user);
}

function sanitizePhoneNumber($phoneNumber, $national = true, $trim = true)
{
    $phoneUtil = PhoneNumberUtil::getInstance();

    if (isset($phoneNumber)) {
        try {
            $phoneNumber = $phoneUtil->format($phoneUtil->parse($phoneNumber, 'NG'), $national ? PhoneNumberFormat::NATIONAL : PhoneNumberFormat::E164);

            if ($trim) {
                $phoneNumber = ltrim($phoneNumber, '+');
            }
        } catch (NumberParseException $exception) {
            $phoneNumber = null;
        }
    } else {
        $phoneNumber = null;
    }

    return $phoneNumber;
}

function respondWithToken($token) {
    return [
        'access_token' => $token,
        'token_type' => 'bearer',
        'expires_in' => auth('api')->factory()->getTTL() * 60
    ];
}

function generateEncodedKey() {
    return hash_hmac('md5', time(). openssl_random_pseudo_bytes(10), config('app.key'));
}

function photoType($photo) {
    if(@is_string($photo)) {
        try {
            $image_data = preg_replace('#^data:image/\w+;base64,#i', '', $photo);
            $decode_image = base64_decode($image_data);

            if(!imagecreatefromstring($decode_image)) {
                return false;
            }
            return "Base64";
        } catch(ErrorException $e) {
            return false;
        }
       
        // dd($image_data);
        // if (base64_encode(base64_decode($photo, true)) === $image_data){
        // } 
    }
   
    return @is_file($photo) ? "file" : false; 
}

function uploadImage($dir, $photo) {
    $photo_type = photoType($photo);

    if(!$photo_type) {
        return null;
    }

    if($photo_type == "Base64") {
        try {
           $name = time(). rand(1,10) . '.' . explode('/', explode(':', substr($photo, 0, strpos($photo, ';')))[1])[1];
        } catch(ErrorException $e) {
            $image_data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $photo));
            $f = finfo_open();
            $mime_type = finfo_buffer($f, $image_data, FILEINFO_MIME_TYPE);
            $extension =  substr($mime_type, (strpos($mime_type, "/") + 1));
            $name = time() . rand(1,10) . '.' . $extension;
        }

        $image = \Image::make($photo)->stream();
        Storage::put($dir . $name, $image);
        // ->save(storage_path('images/shop/').$name);
        return $dir . $name; 
        
    } 
    
    if($photo_type == "file") {
        $imageName = time(). rand(1,10) . '.' . $photo->getClientOriginalExtension();
        $newImage = \Image::make($photo->getRealPath());
        Storage::put($dir . $imageName, $newImage->stream());
        return $dir . $imageName;
    }

    return null;
}

function cleanAmount($string) {
    $string = str_replace(' ', '', $string); // Replaces all spaces with hyphens.
    return preg_replace('/[^0-9\.]+/', '', $string);
}

function isValidAmount($amount) {
    $string = str_replace(',', '', $amount);
    
    return preg_match('/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/', $string); 
}

function lang_url($url = '/')
{
    $supportedLocales = Config::get('app.locales');
    $currentLang = Config::get('app.locale'); // get used locale 
    $defaultLang = Config::get('app.defaultLocale'); // get default locale 

    if ($defaultLang != $currentLang) {
        $url = $currentLang . '/' . $url;
    }
    return url($url);
}

function stringToUrl($string)
{
    $onlyLetters = mb_ereg_replace('[^\\p{L}\s]', '', $string);
    $onlyLetters = preg_replace('/([\s])\1+/', ' ', $onlyLetters);
    $onlyLetters = preg_replace('/\s/', '-', trim($onlyLetters));
    return $onlyLetters;
}

function getSameUrlInOtherLang($toLang)
{
    $request = request();
    $segments = $request->segments();
    foreach (Config::get('app.locales') as $locale) {
        if (($key = array_search($locale, $segments)) !== false) {
            unset($segments[$key]);
        }
    }
    if ($toLang != Config::get('app.defaultLocale')) {
        array_unshift($segments, $toLang);
    }
    return implode('/', $segments);
}