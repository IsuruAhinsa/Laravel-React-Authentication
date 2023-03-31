<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;

class EmailVerificationController extends Controller
{
    public function verificationHandler(EmailVerificationRequest $request)
    {
        $user = $request->user();

        if ($user->hasVerifiedEmail()) {
            return redirect(env('FRONTEND_DOMAIN').'/email/verify/already-success');
        }

        if ($user->markEmailAsVerified()) {
            event(new Verified($user));
        }

        return redirect(env('FRONTEND_DOMAIN').'/email/verify/success');
    }

    public function resend(Request $request)
    {
        $user = $request->user();

        if ($user->hasVerifiedEmail()) {
            return redirect(env('FRONTEND_DOMAIN').'/email/verify/already-success');
        }

        $request->user()->sendEmailVerificationNotification();

        return response()->json([
            'message' => 'Verification link sent!'
        ], 200);
    }
}
