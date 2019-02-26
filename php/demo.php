<?php
	header("content-type:text/html;charset=utf-8");//设置编码.
	//1.创建数据的两种方式
	//数字下标
	//二维数组编写接口。
	$data=array(
		array('url'=>'https://a.vpimg2.com/upload/merchandise/pdcvis/607524/2018/0716/156/2281d794-5d06-49ef-9f35-4a8e0ba13c35_5t_235x297_90.jpg','title'=>'Pratesi | 新年必入 Lolita奢华马毛系列斜跨贝壳包','price'=>'1259'),
		array('url'=>'https://a.vpimg4.com/upload/merchandise/pdcvis/607524/2018/0716/23/34bb6ed0-e4d5-436b-a732-72b6ccf3cd5e_5t_235x297_90.jpg','title'=>'【PIUMELLI | Ginevra复古手提斜跨奶油小方包','price'=>'2389'),
		array('url'=>'https://a.vpimg4.com/upload/merchandise/pdcvis/2018/12/27/152/289d6c61-f72f-47ca-87a5-6b9b021d0e10_5t_235x297_90.jpg','title'=>'Pratesi | 新年必入Grace流光溢彩系列复古纯色手提贝壳包','price'=>'2999'),
		array('url'=>'https://a.vpimg4.com/upload/merchandise/pdcvis/607524/2018/0719/192/43c2f46e-e066-4af7-88d3-1a80f29e864d_5t_235x297_90.jpg','title'=>'Pratesi | 新年必入博主同款Grey流光溢彩系列优雅复古纯色公主包手提包','price'=>'7655'),
		
	);
	
	echo json_encode($data);
	
?>



