<?php

use App\Entities\ApiToken;
use Faker\Generator as Faker;

$factory->define(ApiToken::class, function (Faker $faker) {
    return [
        'api_token' => str_random(60),
    ];
});
