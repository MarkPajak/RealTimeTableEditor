<?php

//define('SCRIPTFOLDER',dirname(dirname(dirname( __file__))));
//include SCRIPTFOLDER.'/php/parameters.php';

if (!function_exists('mail_attachment')) {

function mail_attachment($files, $path, $mailto, $from_mail, $from_name, $replyto, $subject, $message, $cc, $bcc) 
{
$path= SCRIPTFOLDER.'/logs/';
$name = $from_name;//"Name goes here";
$email = $mailto; //"someome@anadress.com";
$to = "BMGA Digital <$email>";
$from = $from_name;
$fileatt = $path.$files;
$fileatttype = "application/txt";
$fileattname = $files;
$headers = "From: $from";

// File
$file = fopen($fileatt, 'rb');
$data = fread($file, filesize($fileatt));
fclose($file);
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Additional headers

$headers .= 'From: '.$from_mail . "\r\n";
$headers .= 'Cc: '.$cc  . "\r\n";



$data = chunk_split(base64_encode($data));


// Send the email
if(mail($to, $subject, $message, $headers)) {

    echo "The email was sent.";

}
else {

    echo "There was an error sending the mail.";

}
}
   
}
?>
