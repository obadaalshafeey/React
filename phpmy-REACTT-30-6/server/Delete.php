
<?php 
include_once "./connection.php";
?>


<?php
$id = $_REQUEST['id'];

$sql="DELETE FROM person WHERE id='$id'";

$result  = $conn->query($sql);



  $conn->close();

?>