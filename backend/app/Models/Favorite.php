<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Favorite extends Model
{
    use HasFactory;

    protected $table = 'favorites';

    public static $fields_sizeMax = array(
        'category' => 8,
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
        'category',
        'entity_id',
    ];

    public function user(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
}
