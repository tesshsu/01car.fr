<?php

//Artisan::call('command:name', ['--option' => 'foo']);

Artisan::call('storage:link');

/*
define('SYMLINK_FILE', 0);
define('SYMLINK_DIR', 1);
define('SYMLINK_JUNCTION', 2);
function symlink_windows ($target, $link, $flag = SYMLINK_FILE) {
    switch ($flag) {
       case SYMLINK_DIR: $pswitch = '/d'; break;
       case SYMLINK_JUNCTION: $pswitch = '/j'; break;
       case SYMLINK_FILE:
       default: $pswitch = ''; break;
    }
    // Change / to \ because it will break otherwise.
    $target = str_replace('/', '\\', $target);
    $link = str_replace('/', '\\', $link);
    return exec('mklink ' . $pswitch . ' "' . $link . '" "' . $target . '"');
}
*/


?>