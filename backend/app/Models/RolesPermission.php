<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RolesPermission extends Model
{
    protected $primaryKey = ['role_id', 'permission'];
    public $incrementing = false;

    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'permission'
    ];

    public function role(){
        return $this->belongsTo('App\Models\Role');
    }
}
