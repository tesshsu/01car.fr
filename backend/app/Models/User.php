<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    public static $fields_sizeMax = array(
        'name' => 64,
        'email' => 256,
        'password' => 256,
        'phone' => 32
    );

    public static function fieldsSizeMax($name)
    {
        return self::$fields_sizeMax[$name];
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'phone'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // custom function used for relationshisp
    // user can have many roles
    public function roles()
    {
        return $this->belongsToMany(Role::class, 'users_roles');
    }


    public function isAdminUser()
    {
        return true;
    }


    public function hasPermissions($permissions)
    {
        $requestPermissions = array();
        if (is_array($permissions)) {
            $requestPermissions = array_merge($requestPermissions, $permissions);
        } else {
            $requestPermissions[] = $permissions;
        }
        $currentUser = $this->loadMissing('roles', 'roles.permissions');
        $userPermissions = array();
        foreach ($currentUser->roles as $role) {
            foreach ($role->permissions as $permissionObj) {
                $userPermissions[] = $permissionObj->permission;
            }
        }

        return count(array_intersect($requestPermissions, $userPermissions)) == count($requestPermissions);
    }
}
