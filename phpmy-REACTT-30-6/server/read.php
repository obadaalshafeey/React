<?php
header("Access-Control-Allow-Origin: * ");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS,DELETE,PUT');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$servername='localhost';
$dbusername='root';
$password='';
$database='api-react';

// Create connection
$conn = mysqli_connect($servername,$dbusername, $password,$database);

// Check connection+
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
$sql="select * from user";
$result=mysqli_query($conn,$sql);
if(!$result){
   http_response_code(404);
   die(mysqli_error($conn));

}
echo "[";
for($i=0; $i<mysqli_num_rows($result) ;$i++ ){
    echo($i>0?' ,': '').json_encode(mysqli_fetch_object($result));
}

echo "]";

?>
