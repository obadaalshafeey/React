<?php

header("Access-Control-Allow-Origin: *");

$server="localhost";
$dbusername="root";
$password="";
$database="api-react";

$con=mysqli_connect($server,$dbusername,$password,$database);

if(!$con){
    die("connection feild: ".mysqli_connect_error());
}

$name=$_REQUEST["name"];
$email=$_REQUEST["email"];
$age=$_REQUEST["age"];
$sql="INSERT INTO user (name,email,age) values ('$name','$email','$age')";

mysqli_query($con,$sql);
?>