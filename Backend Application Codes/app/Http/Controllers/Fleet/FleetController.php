<?php

namespace App\Http\Controllers\Fleet;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Fleet;
use Lang;
use Auth;
use Carbon\Carbon;

class FleetController extends Controller
{
    public function index(Request $request)
    {
        $adminInfo = null;
        $adminsModel = new adminsModel();
        $admins = $adminsModel->getUsers();
        $edit = $request->input('edit');
        if ($edit != null) {
            $adminInfo = $adminsModel->getOneUser($edit);
            if ($adminInfo == null) {
                abort(404);
            }
        }
        return view('admin.admins', [
            'page_title_lang' => Lang::get('admin_pages.admins'),
            'admins' => $admins,
            'adminInfo' => $adminInfo
        ]);
    }

    public function setUser(Request $request)
    {
        $edit = $request->input('edit');
        $adminsModel = new adminsModel();
        if ($edit > 0) {
            $adminsModel->updateUser($request->all());
            $msg = Lang::get('admin_pages.user_is_updated');
        } else {
            $adminsModel->setUser($request->all());
            $msg = Lang::get('admin_pages.user_is_added');
        }
        return redirect(lang_url('admin/admins'))->with(['msg' => $msg, 'result' => true]);
    }

    public function deleteUser(Request $request)
    {
        if (isset($request->userId) && (int) $request->userId > 0) {
            $adminsModel = new adminsModel();
            $adminsModel->deleteUser($request->userId);
            return redirect(lang_url('admin/admins'))->with(['msg' => Lang::get('admin_pages.user_is_deleted'),
                'result' => true]);
        } else {
            abort(404);
        }
    }

    public function logout()
    {
        Auth::logout();
        return redirect('/');
    }

    /**
     * Show User change password form
     *
     * @param  \App\Admin
     * @return \Illuminate\Http\Response
     */
    public function password()
    {
        return view('admin.account.change-password');
    }

    /**
     * Change User password.
     *
     * @param  \App\Provider  $provider
     * @return \Illuminate\Http\Response
     */
    public function password_update(Request $request)
    {
        $this->validate($request, [
            'old_password' => 'required',
            'password' => 'required|min:6|confirmed',
        ]);

        try {
            $Admin = Admin::find(Auth::guard('admin')->user()->id);

            if (password_verify($request->old_password, $Admin->password)) {
                $Admin->password = bcrypt($request->password);
                $Admin->save();

                return redirect()->back()->with('flash_success', 'Password Updated');
            }
        } catch (Exception $e) {
            return back()->with('flash_error', 'Something Went Wrong!');
        }
    }
}
