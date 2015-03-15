
<?php
define('KIOSKFOLDER',dirname(dirname( __file__)));

include KIOSKFOLDER.'/general/errorHandle.php';
include KIOSKFOLDER.'/general/email.php';
require_once KIOSKFOLDER.'/imu/DB_CONNECT.php';
require KIOSKFOLDER.'/imu/MYSQL_CONNECT.php';


function SQLUpdate($Database,$table, $mysqli,$sql){
	
				$mysqli->query('REPLACE INTO '.$Database.'.'.$table.' (id, name, last_name,comment, date ,location,keywords) VALUES'.implode(',', $sql));
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


function SQLDisplay($Database,$table, $mysqli,$id,$number,$procedureid){

//$mysqli->query('Delete from '.$Database.'.'.$table.' where id='.$id);
//printf("Errormessage: %s\n", $mysqli->error);
$conditionalClause = "";

if($number!=0){
$conditionalClause = " where number=".$number;
}

if($procedureid!=0){
$conditionalClause .= " and where procedureid=".$procedureid;
}

if ($resultx = $mysqli->query("SELECT * from  ".$table.$conditionalClause.' order by date asc;')){
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
date_default_timezone_set('UTC');
	$date=date('l jS \of F Y h:i:s A');	
				
$id='default';
$name="anon";
$last_name="anon";
$comment="";
$method="relpace";
$number='0';
$procedureid='0';
$document=null;
$keywords="";
$location="";
if(isset($_GET["document"])){
$document=($_GET["document"]) ;
}

if(isset($_GET["procedureid"])){
$procedureid=($_GET["procedureid"]) ;
}
if(isset($_GET["name"])){
$name=($_GET["name"]) ;
}

if(isset($_GET["last_name"])){
$last_name=($_GET["last_name"]) ;
}
if(isset($_GET["phone"])){
$phone=($_GET["phone"]) ;
}

if(isset($_GET["action"])){
$method=$_GET["action"];
}
if(isset($_GET["comment"])){
$comment=($_GET["comment"]) ;
}
if(isset($_GET["id"])){
$id=($_GET["id"]) ;

}
if(isset($_GET["location"])){
$location=($_GET["location"]) ;

}

if(isset($_GET["keywords"])){
$keywords=($_GET["keywords"]) ;

}

if(isset($_GET["email"]) && $method=="create"){

		$email=$_GET["email"] ;
		$files="";
		$path="";
		$mailto="markpajak.spider@gmail.com";
		$from_mail="no reply";
		$from_name="BMGA COMMENT FORM";
		$replyto="";
		$subject=$location."visitor";
		$message="First name: ".$name."<br><br>";
		$message.="Last name: ".$last_name."<br><br>";
		$message.="Email: ".$email."<br><br>";
		$message.="Telephone: ".$phone."<br><br>";
		$message.="Message: ".$comment."<br><br>";
	

		$cc="mark.pajak@bristol.gov.uk";
	    $bcc="";
mail_attachment($files, $path, $mailto, $from_mail, $from_name, $replyto, $subject, $message, $cc, $bcc) ;
}

 
 
 
 
$table="comments";





$sql=array();
$sql[] = '('.$id.', "'.$name.'", "'.$last_name.'", "'.$comment.'","'.$date.'","'.$location.'","'.$keywords.'");';



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
 SQLDisplay($Database,$table, $mysqli,$id,$number,"");}



?>
