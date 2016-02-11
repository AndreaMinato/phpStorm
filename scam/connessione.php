<?php
// parametri per la connessione al database
$nomehost = "ftp.scamappunti.altervista.org";
$nomeuser = "scamappunti";
$password = "ragvobovpi31";
$database = "my_scamappunti";
// connessione a MySQL
$conn=mysql_connect($nomehost,$nomeuser,$password) or die("Connessione non riuscita: " . mysql_error());
// scelta database
$db_selected = mysql_select_db($database, $conn) or die("impossibile accedere al database: " . mysql_error());
?>