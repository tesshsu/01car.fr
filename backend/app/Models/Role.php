<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    public static $fields_sizeMax = array(
         'name' => 32
    );

    public static function fieldsSizeMax($name) {
       return self::$fields_sizeMax[$name];
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name'
    ];

    // custom function used for relationshisp
    public function permissions(){
        return $this->hasMany(RolesPermission::class);
    }

}
