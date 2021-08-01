<?php

namespace App\Http\Requests\OTP;

use Exception;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;

class ActivationCodeValidationRequest extends FormRequest
{
    
    public $user;

    public function __construct() {
        $this->user = auth('api')->user();
    }
    
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        // 'exists:App\Models\Otp,digit',
        return [
            'code' => [
                'required', function ($attribute, $value, $fail) {
                    if (!$this->user->otp) {
                        $fail('The '.$attribute.' entered is incorrect. Enter correct ' . $attribute);
                    } elseif($this->user->otp->digit != $this->input('code')) {
                        $fail('The '.$attribute.' entered is incorrect. Enter correct ' . $attribute);
                    }
                },
            ]
        ];
    }
    

    public function withValidator(Validator $validator)
    {
        $validator->after(function ($validator) {
            if ($this->user->otp) {
                if($this->user->otp->digit == $this->input('code') && $this->user->otp->expires_at->lt(now())) {
                    $validator->errors()->add('code', 'Activation code has expired. Please generate a new code');
                }
            }
        });

        return $validator;
    }

    
    public function activateUserAccount() {
        try {
            $this->user->email_verified_at = now();
            $this->user->save();
            return response()->success("User account successfully activated");
        } catch(QueryException $e) {
            return response()->errorResponse('Error acctivating user account', ['account' => 'user account could not be activated']);
        } catch(Exception $e) {
            return response()->errorResponse('Error acctivating user account', ['account' => 'user account could not be activated']);
        }
    }
    
}
