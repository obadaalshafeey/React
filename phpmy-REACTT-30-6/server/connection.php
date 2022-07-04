<?php

header("Access-Control-Allow-Origin: *");

$server="localhost";
$dbusername="root";
$password="";
$database="api-react";

$con=mysqli_connect($server,$dbusername,$password,$database);

 if($conn)
{

 }else
{
    echo "connection failed";
}
?>