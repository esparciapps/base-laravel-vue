<?php

namespace App\Guards;

use App\Entities\ApiToken;
use Illuminate\Auth\GuardHelpers;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Contracts\Auth\UserProvider;
use Illuminate\Http\Request;

class ApiTokenGuard implements Guard
{
    use GuardHelpers;

    /** @var Request */
    protected $request;
    protected $tokenName;


    public function __construct(UserProvider $provider, Request $request)
    {
        $this->provider = $provider;
        $this->request = $request;
        $this->tokenName = env('API_TOKEN_NAME', 'api_token');
    }

    /**
     * Get the currently authenticated user.
     *
     * @return \Illuminate\Contracts\Auth\Authenticatable|null
     */
    public function user()
    {
        if (! is_null($this->user)) {
            return $this->user;
        }

        $token = $this->getTokenFromRequest();
        $apiToken = ApiToken::whereAuthToken($token)->first();

        $user = optional($apiToken)->user;

        return $this->user = $user;
    }

    /**
     * Validate a user's credentials.
     *
     * @param  array $credentials
     * @return bool
     */
    public function validate(array $credentials = [])
    {
        if (empty($credentials[$this->tokenName])) {
            return false;
        }

        if ($this->provider->retrieveByCredentials($credentials)) {
            return true;
        }

        return false;
    }

    protected function getTokenFromRequest()
    {
        return
            $this->request->bearerToken() ??
            $this->request->query($this->tokenName) ??
            $this->request->input($this->tokenName) ??
            $this->request->header($this->tokenName)
        ;
    }
}
