<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Contracts\Auth\Factory as Auth;


class imageGuard
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    protected $auth;

    public function __construct(Auth $auth)
    {
        $this->auth = $auth;
    }

    public function handle($request, Closure $next)
    {
        return $next($request);
    }
}
