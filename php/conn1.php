<?php
	header('content-type:text/html;charset=utf-8');
	define('HOST','localhost');
	define('USERNAME','root');
	define('PASSWORD','123456');
	define('DBNAME','weipinhui');
	
	$conn1=@new mysqli(HOST,USERNAME,PASSWORD,DBNAME);
	if($conn->connect_error){
		die('数据库连接失败'.$conn->connect_error);
	}
	$conn1->query('SET NAMES UTF8');
	
	$result=$conn1->query("select * from tadatabase");
	
	$arr=array();
	for($i=0;$i<$result->num_rows;$i++){
		$arr[$i]=$result->fetch_assoc();
	}
	
	
    
?>