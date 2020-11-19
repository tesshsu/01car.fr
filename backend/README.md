<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 1500 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the Laravel [Patreon page](https://patreon.com/taylorotwell).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Cubet Techno Labs](https://cubettech.com)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[Many](https://www.many.co.uk)**
- **[Webdock, Fast VPS Hosting](https://www.webdock.io/en)**
- **[DevSquad](https://devsquad.com)**
- **[OP.GG](https://op.gg)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

# Composer

php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === 'c31c1e292ad7be5f49291169c0ac8f683499edddcfd4e42232982d0fd193004208a58ff6f353fde0012d35fdd72bc394') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"



## Debuf

First, download the Laravel installer using Composer:

```
../tools/composer.phar global require laravel/installer

../tools/composer.phar install
```
sudo apt-get autoremove --purge phpmyadmin

sudo dpkg-reconfigure phpmyadmin

php artisan serve


/etc/init.d/mysql stop

Now you should start up the database in the background, via the mysqld_safe command:

root@steve:~# /usr/bin/mysqld_safe --skip-grant-tables &
[1] 6702
Starting mysqld daemon with databases from /var/lib/mysql
mysqld_safe[6763]: started

Here you can see the new job (number "1") has started and the server is running with the process ID (PID) of 6702.

Now that the server is running with the --skip-grant-tables flag you can connect to it without a password and complete the job:

root@steve:~$ mysql --user=root mysql
Enter password:

mysql> update user set Password=PASSWORD('root') WHERE User='root';

flush privileges;

SELECT User, Host, plugin FROM mysql.user;


```


Edit file /usr/share/phpmyadmin/libraries/sql.lib.php:

sudo nano /usr/share/phpmyadmin/libraries/sql.lib.php

On line 613 the count function always evaluates to true since there is no closing parenthesis after $analyzed_sql_results['select_expr']. Making the below replacements resolves this, then you will need to delete the last closing parenthesis on line 614, as it's now an extra parenthesis.

Replace:

((empty($analyzed_sql_results['select_expr']))
    || (count($analyzed_sql_results['select_expr'] == 1)
        && ($analyzed_sql_results['select_expr'][0] == '*')))

With:

((empty($analyzed_sql_results['select_expr']))
    || (count($analyzed_sql_results['select_expr']) == 1)
        && ($analyzed_sql_results['select_expr'][0] == '*'))

Restart the server apache:

sudo service apache2 restart

```



To log in as root in phpmyadmin:

echo "UPDATE mysql.user SET plugin = 'mysql_native_password' WHERE user = 'root' AND plugin = 'unix_socket';FLUSH PRIVILEGES;" | mysql -u root -p

Found at the end of this tutorial

Worked for me :)


CREATE USER 'biandangUser'@'localhost' IDENTIFIED BY 'biandangPassword';

GRANT ALL PRIVILEGES ON biandang.* TO 'biandangUser'@'localhost';

FLUSH PRIVILEGES;

# login social

https://www.toptal.com/laravel/passport-tutorial-auth-user-access

https://www.nicesnippets.com/blog/laravel-8-socialite-login-with-facebook-tutorial
https://www.tutsmake.com/laravel-7-6-facebook-login-tutorial-example/


# factory

https://fakerphp.github.io/formatters/


# Laradock

https://laradock.io/getting-started/
```
docker-compose up -d nginx mysql phpmyadmin

docker-compose exec --user=laradock workspace bash
```


php artisan make:model SocialFacebookAccount -m -c


php artisan make:migration create_users_roles_table

php artisan migrate

php artisan make:seeder UsersTableSeeder

../tools/composer.phar dump-autoload 

php artisan db:seed

https://github.com/cloudcreativity/demo-laravel-json-api/blob/5.6/database/migrations/2016_06_04_063426_create-posts-and-comments-tables.php


php artisan route:list

# passport

https://medium.com/techcompose/create-rest-api-in-laravel-with-authentication-using-passport-133a1678a876
https://laravel.com/docs/5.8/passport

```
php artisan migrate
php artisan passport:install
```
```
php artisan passport:client --personal

php artisan migrate:fresh --seed
```

## Passing The Access Token

When calling routes that are protected by Passport, your application's API consumers should specify their access token as a Bearer token in the Authorization header of their request. For example, when using the Guzzle HTTP library:

$response = $client->request('GET', '/api/user', [
    'headers' => [
        'Accept' => 'application/json',
        'Authorization' => 'Bearer '.$accessToken,
    ],
]);


# server

```
/opt/plesk/php/7.3/bin/php artisan migrate:fresh --seed

/opt/plesk/php/7.3/bin/php artisan passport:client --personal
```



