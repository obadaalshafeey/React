<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

include_once './connection.php';
$postdata = file_get_contents("php://input");
// print_r($postdata);

if(isset($postdata) && !empty($postdata)){
	//extract the data
	$request = json_decode($postdata);
	
	print_r($request);

	$id = $_GET['id'];
	$name = $request->name;
	$userEmail = $request->email;
	$userAge = $request->age;
	
	//update
	$sql = "UPDATE `students` SET `name`='$name', `email`='$userEmail', 
	`age`='$userAge' WHERE id='{$id}'";
	
	if(mysqli_query($conn, $sql)){
		http_response_code(204);
	}else{
		return http_response_code(422);
	}
}

