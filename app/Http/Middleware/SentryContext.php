<?php

namespace App\Http\Middleware;

use App\Entities\User;
use Closure;

class SentryContext
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (app()->bound('sentry')) {
            /** @var \Raven_Client $sentry */
            $sentry = app('sentry');

            if (auth()->check()) {
                /** @var User $user */
                $user = auth()->user();

                $sentry->user_context([
                    'id' => $user->id,
                    'username' => $user->name,
                    'email' => $user->email,
                ]);

            } else {
                $sentry->user_context(['id' => null]);
            }

            $sentry->tags_context([
                'browser' => \Browser::browserName(),
                'platform' => \Browser::platformName(),
                'device_family' => \Browser::deviceFamily(),
                'device_model' => \Browser::deviceModel(),
                'device_grade' => \Browser::deviceGrade(),
            ]);
        }

        return $next($request);
    }
}
