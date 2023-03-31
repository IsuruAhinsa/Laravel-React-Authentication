<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\Auth\LoginRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function login(LoginRequest $request)
    {
        if ($this->attemptLogin($request)) {
            return $this->sendLoginResponse();
        }

        return $this->sendFailedLoginResponse();
    }

    protected function attemptLogin($request)
    {
        return Auth::attempt($this->credentials($request), $request->boolean('remember'));
    }

    protected function credentials($request)
    {
        return $request->only('email', 'password');
    }

    protected function sendLoginResponse()
    {
        $user = Auth::user();

        $token = $user->createToken('basic')->accessToken;

        return response()->json([
            'user' => $user,
            'token' => $token,
        ], 200);
    }

    protected function sendFailedLoginResponse()
    {
        throw ValidationException::withMessages([
            'email' => [trans('auth.failed')]
        ]);
    }

    public function logout()
    {
        $token = Auth::guard('api')->user()->token();

        $token->revoke();

        return response()->json([
            'message' => 'Successfully Logged Out!'
        ], 200);
    }
}
