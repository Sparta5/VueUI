<?php
$path = 'avatar';
$handle = opendir($path);
$n = 0;
while (($filename = readdir($handle)) !== false) {
    if($filename != '.' && $filename != '..'){
        $extension = pathinfo($filename, PATHINFO_EXTENSION);
        $uuid =  $n . '.' . $extension;
        // echo $uuid , '<br>';
        rename($path . '/' . $filename, $path . '/' . $uuid);
        $n++;
        // echo $n , '<hr>';
    }
}
closedir($handle);
