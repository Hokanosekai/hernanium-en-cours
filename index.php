<?php

$pages = scandir('./php/pages/');

$url = '';
if(isset($_GET['url'])){
    $url = explode('/', $_GET['url']);
}

if($url == '' || $url[0] == 'home' || $url[0] == 'accueil'){
    require './php/pages/home.php';
}elseif ($url[0] == 'fond-d-ecran'){
    require './php/pages/fonddecran.php';
}elseif ($url[0] == 'infos'){
    require './php/pages/infos.php';
}elseif ($url[0] == 'wiki'){
    require './php/pages/wiki.php';
}elseif ($url[0] == 'builds'){
    require './php/pages/builds.php';
}else{
    require './php/pages/error.php';
}
?>