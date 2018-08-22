<?php

namespace App\Providers;

use App\Guards\ApiTokenGuard;
use Illuminate\Auth\EloquentUserProvider;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Log;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Auth::extend('api_tokens', function ($app, $name, array $config) {
            $userProvider = $app['auth']->createUserProvider($config['provider']);
            $request = app('request');

            return new ApiTokenGuard($userProvider, $request);
        });
    }
}
