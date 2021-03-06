
<?php
define('KIOSKFOLDER',dirname(dirname( __file__)));

include KIOSKFOLDER.'/general/errorHandle.php';
require_once KIOSKFOLDER.'/imu/DB_CONNECT.php';
require KIOSKFOLDER.'/imu/MYSQL_CONNECT.php';


function SQLUpdate($Database,$table, $mysqli,$sql){
	
	
	
				$mysqli->query('REPLACE INTO '.$Database.'.'.$table.' (id, heading, text,number,sectionid ,tosectionid) VALUES'.implode(',', $sql));
				//printf("Errormessage: %s\n", $mysqli->error);
				if ($resultx = $mysqli->query("SELECT * from  ".$table.';')){
					$row_cnt = $resultx->num_rows;
					
					$data = array();
					while($row = $resultx->fetch_assoc()){
					$data[] = $row;
					}
					echo json_encode($data);
					

				
				$ObjectTOTAL=$row_cnt;
				}
				if ($mysqli->connect_error) {				
					die('Connect Error (' . $mysqli->connect_error . ') '
							. $mysqli->connect_error);

				}}
				
function SQLDelete($Database,$table, $mysqli,$id){

$mysqli->query('Delete from '.$Database.'.'.$table.' where id='.$id);
//printf("Errormessage: %s\n", $mysqli->error);
if ($resultx = $mysqli->query("SELECT * from  ".$table.';')){
	$row_cnt = $resultx->num_rows;
	
	$data = array();
	while($row = $resultx->fetch_assoc()){
	$data[] = $row;
	}
	echo json_encode($data);
	


$ObjectTOTAL=$row_cnt;
}
if ($mysqli->connect_error) {				
	die('Connect Error (' . $mysqli->connect_error . ') '
			. $mysqli->connect_error);

}}


function SQLDisplay($Database,$table, $mysqli,$id,$number){

//$mysqli->query('Delete from '.$Database.'.'.$table.' where id='.$id);
//printf("Errormessage: %s\n", $mysqli->error);
$conditionalClause = "";

if($number!=0){
$conditionalClause = " where sectionid=".$number;
}

if ($resultx = $mysqli->query("SELECT * from  ".$table.$conditionalClause.' order by number asc;')){
	$row_cnt = $resultx->num_rows;
	
	$data = array();
	while($row = $resultx->fetch_assoc()){
	$data[] = $row;
	}
	echo json_encode($data);
	


$ObjectTOTAL=$row_cnt;
}
if ($mysqli->connect_error) {				
	die('Connect Error (' . $mysqli->connect_error . ') '
			. $mysqli->connect_error);

}}
				
				
$id='default';
$heading="heading";
$text="text";
$method="relpace";
$number=0;
$sectionid=0;

if(isset($_GET["heading"])){
$heading=($_GET["heading"]) ;
}
if(isset($_GET["action"])){
$method=$_GET["action"];
}
if(isset($_GET["text"])){
$text=($_GET["text"]) ;
}
if(isset($_GET["id"])){
$id=($_GET["id"]) ;

}
if(isset($_GET["number"])){
$number=($_GET["number"]) ;

}

if(isset($_GET["sectionid"])){
$sectionid=($_GET["sectionid"]) ;
}

if(isset($_GET["tosectionid"])){
$tosectionid=($_GET["tosectionid"]) ;
}

$table="Steps";
$Database="Procedures";




$sql=array();
$sql[] = '('.$id.', "'.$heading.'", "'.$text.'",'.$number.','.$sectionid.','.$tosectionid.');';



if($method=="delete"){
SQLDelete($Database,$table, $mysqli,$id);
}
elseif($method=="edit"){

SQLUpdate($Database,$table, $mysqli,$sql);
}
elseif($method=="create"){

SQLUpdate($Database,$table, $mysqli,$sql);
}
else{
 SQLDisplay($Database,$table, $mysqli,$id,$sectionid);}



?>
