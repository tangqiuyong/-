<?php
	$sever='localhost:3306';
	$name='root';
	$password='123456';
	$dbase='taobao';
	$conn=mysqli_connect($sever,$name,$password,$dbase);
	mysqli_set_charset($conn,'UTF-8');
	/* $result = mysqli_query($conn,'select * from wrong');
	$data = mysqli_fetch_all($result);
	var_dump ($data); */
		
		
		
		
?>