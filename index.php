<?php
include "Entity.php";

$path = array_shift($_GET) ?: '/';
$entity = new Entity();

header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');

if ($path === 'filter') {
    $res = $entity->filter($_GET['column'], $_GET['condition'], $_GET['filterValue']);

    echo json_encode($res);
}

if ($path === '/') {
    $res = $entity->getAll();

    echo json_encode($res);
}

