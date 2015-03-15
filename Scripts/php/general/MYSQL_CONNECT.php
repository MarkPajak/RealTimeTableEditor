<?php

Logfile (BD."DataLoader/egypt/log/kiosk_log","connecting to ".$Database." database") ;

$mysqli = new mysqli("localhost", $user, $Password, $Database);
if ($mysqli->connect_error) {

//Logfile (BD."DataLoader/egypt/log/kiosk_log",'Connect Error (' . $mysqli->connect_error . ') ') ;
    die('Connect Error (' . $mysqli->connect_error . ') '
            . $mysqli->connect_error);

}
if (!$mysqli->set_charset("utf8")) {
    printf("Error loading character set utf8: %s\n", $mysqli->error);
} else {
    printf("Current character set: %s\n", $mysqli->character_set_name());
}

?>
