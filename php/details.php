<?php
	include "conn.php";
	
	$id=$_GET['sid'];
	
	$result=mysqli_query($conn,"select * from taobaopic where sid=$id");
	
	$list=mysqli_fetch_array($result,MYSQLI_ASSOC);
	
	echo json_encode($list);
?>