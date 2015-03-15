<?php
define('KIOSKFOLDER2',dirname( __file__));
$Database='<<database>>';
$table='Sections';
$user='<<user name>>';
$Password='<<password>>';
//Logfile (KIOSKFOLDER2."/Scripts/logs/kiosk_log","connecting to ".$Database." database") ;

$mysqli = new mysqli("localhost", $user, $Password, $Database);
if ($mysqli->connect_error) {
//Logfile (KIOSKFOLDER2."/Scripts/logs/kiosk_log",'Connect Error (' . $mysqli->connect_error . ') ') ;

    die('Connect Error (' . $mysqli->connect_error . ') '
            . $mysqli->connect_error);

}
?>