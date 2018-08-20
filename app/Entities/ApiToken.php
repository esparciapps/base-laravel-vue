<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class ApiToken extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
