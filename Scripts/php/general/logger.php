<?php
$date = date('m/d/Y h:i:s a', time());
$myFile = "ObjectLocator1_log.txt";
$fh = fopen($myFile, 'a') or die("can't open file");
$stringData = "Refresh Script complete ".$date."\n";
fwrite($fh, $stringData);
fclose($fh);





?>
