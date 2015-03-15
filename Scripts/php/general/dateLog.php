<?php
function Logfile ($Logfile,$Message){
echo "\n".$Message;
date_default_timezone_set('UTC');
$date = date('m/d/Y h:i:s a', time());
$myFile = $Logfile.".txt";
$fh = fopen($myFile, 'a') or die("can't open file");
$stringData = $date." - ".$Message."\n";
fwrite($fh, $stringData);
fclose($fh);
}

?>
