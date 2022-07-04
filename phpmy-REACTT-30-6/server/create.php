<?php


include_once "./connection.php";
?>

    
<?php
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$age = $_REQUEST['age'];



$sql="INSERT INTO users (name,email,age) VALUES ('$name','$email',$age)";

$result  = $conn->query($sql);


if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }





?>
    