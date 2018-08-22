<?php

namespace App\Http\Controllers\Auth;

use App\Guards\ApiTokenGuard;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use App\Entities\ApiToken;

/**
 * @method ApiTokenGuard guard()
 */
class LoginController extends Controller
{
    use AuthenticatesUsers;

    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    protected function sendLoginResponse(Request $request)
    {
        $this->clearLoginAttempts($request);

        $user = $this->guard()->user();

        $token = factory(ApiToken::class)->create(['user_id' => $user->id]);

        return ['api_token' => $token->api_token];
    }

    public function logout()
    {
        $token = $this->guard()->apiToken();
        $status = $token->delete();

        return ['success' => $status];
    }
}
