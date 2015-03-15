<?php

function errHandle($errNo, $errStr, $errFile, $errLine) {
include SCRIPTFOLDER.'/php/general/email.php';
include SCRIPTFOLDER.'/php/parameters.php';
$filename = KIOSKFOLDER.'/Trigger files/success.txt';
    $msg = "$errStr in $errFile on line $errLine";
    if ($errNo == E_NOTICE || $errNo == E_WARNING) {
Logfile (KIOSKFOLDER."/Scripts/logs/kiosk_log","\n\nan error occurred REFRESH FAILED\n\n");
Logfile (KIOSKFOLDER."/Scripts/logs/kiosk_log","\n\n".$msg."\n\n");
Logfile (KIOSKFOLDER."/Scripts/logs/kiosk_log","removing success file\n");
unlink($filename);
$filenam="kiosk_log.txt";
$path= "../../logs/";
$subject = $Database. " refresh FAILED";
$from_mail=$Database." ICT system@Bristol Museum";
$message = "The overnight refresh of the ".$Database." gallery IT system FAILED - check the refresh log";
mail_attachment($filenam, $path, $mailto, $from_mail, $from_name, $replyto, $subject, $message,$cc,$bcc);

    throw new ErrorException($msg, $errNo);

    } else {
        echo $msg;
    }
}

function errHandle_restore($errNo, $errStr, $errFile, $errLine) {
include SCRIPTFOLDER.'/php/general/email.php';
//define('SCRIPTFOLDER',dirname(dirname(dirname( __file__))));

include SCRIPTFOLDER.'/php/parameters.php';
$restore = KIOSKFOLDER.'/Trigger files/restore.txt';



$filename = KIOSKFOLDER.'/Trigger files/success.txt';
    $msg = "$errStr in $errFile on line $errLine";
    if ($errNo == E_NOTICE || $errNo == E_WARNING ||  $errNo == E_USER_WARNING) {
//--------------------------------------------------------------------------
    
    Logfile (KIOSKFOLDER."/Scripts/logs/kiosk_log","\n\nan error occurred REFRESH FAILED\n\n");

Logfile (KIOSKFOLDER."/Scripts/logs/kiosk_log","\n\n".$msg."\n\n");
$handle = fopen($restore, 'w') or die('Cannot open file:  '.$filename); //implicitly creates file
$filenam="kiosk_log.txt";
$path= "../../logs/";
$subject = $Database. " refresh FAILED";
$from_mail=$Database." ICT system@Bristol Museum";
$message = "The overnight refresh of the ".$Database." gallery IT system FAILED - check the refresh log";
mail_attachment($filenam, $path, $mailto, $from_mail, $from_name, $replyto, $subject, $message,$cc,$bcc);





logfile (KIOSKFOLDER."/Scripts/logs/kiosk_log","\n\n\nStart of error handling");
logfile (KIOSKFOLDER."/Scripts/logs/kiosk_log","archiving LIVE");

if($Backup==true){
$toName = KIOSKFOLDER."/Archive/Live_".date('m-d-Y-His A e');
if (!is_dir(dirname($toName))) {
    mkdir(dirname($toName), 0777, true);
}
rename(KIOSKFOLDER."/Live", $toName);
mkdir(KIOSKFOLDER."/Live", 0777, true);
//----------------------------------------------------------------------------
//--------------------------------------------------------------------------
logfile (KIOSKFOLDER."/Scripts/logs/kiosk_log","backing up live");
$toName = KIOSKFOLDER."/Live/";
if (!is_dir(dirname($toName))) {
    mkdir(dirname($toName), 0777, true);
}
exec('cp -r '.KIOSKFOLDER."/Backup/* ".$toName);
logfile (KIOSKFOLDER."/Scripts/logs/kiosk_log","Backup Restored");
//----------------------------------------------------------------------------
logfile (KIOSKFOLDER."/Scripts/logs/kiosk_log","restoring SQL");
exec('mysqlimport -u '.$user.' -p'.$Password.' '.$Database.' '.KIOSKFOLDER.'/Scripts/sql/'.$Database.'.sql');
}

    throw new ErrorException($msg, $errNo);

    } else {
        echo $msg;
    }
}
// trigger_error("Value must be 1 or below",E_WARNING);

 ?>
