<?php
session_start();
if ($_SESSION['id'] == null)
header("Location: index.php");
else {
require "connessione.php";
$user = $_SESSION['username'];
$liv = $_SESSION['livello'];
$id = $_SESSION['id'];


?>

<!DOCTYPE html>
<html lang="it" xmlns="http://www.w3.org/1999/html">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap.css"/>
    <link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap-theme.css"/>
    <link rel="stylesheet" type="text/css" href="bower_components/jquery-ui/themes/base/all.css"/>
    <link rel="stylesheet" type="text/css" href="animate.css"/>
    <link rel="stylesheet" type="text/css" href="style.css"/>
    <link rel="stylesheet" type="text/css" href="stylehome.css"/>

    <title>Home - ScamAppunti</title>


</head>

<body>


<div class="container">

    <div class="row">

        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <ul class="nav nav-tabs nav-justified">
                    <li role="presentation"><a href="home.php">Home</a></li>
                    <?php
                    if ($liv == 0) {
                        ?>
                        <li role="presentation"><a href="aggiungiMembro.php">Aggiungi Membro</a></li>
                        <li role="presentation"><a href="aggiungiAppunti.php">Aggiungi Appunti</a></li>
                        <?php
                    }
                    ?>
                </ul>
            </div>
        </nav>

    </div>


    <?php
    $query = "SELECT a.id, a.titolo, a.autore,a.inserito, a.livello, a.link,  m.nome
				FROM appunti a LEFT JOIN materie m
				ON  a.rel_materia = m.id
				ORDER BY a.titolo asc ";
    $ris = mysql_query($query) or die(mysql_error());
    $num_righe = mysql_num_rows($ris);
    //echo "Ci sono " . $num_righe . " Appunti";
    ?>
    <table class="table table-hover table-responsive">
        <thead>
        <th>Scarica</th>
        <th>Titolo</th>
        <th>Autore</th>
        <th>Data Inserimento</th>
        <th>Materia</th>
        </thead>
        <?php
        while ($riga = mysql_fetch_array($ris, MYSQL_ASSOC)) {
            if($riga["livello"]<$liv){
                ?><tr><td><span class="glyphicon glyphicon-remove-circle"></span></td><?php }
            else{
                ?>
                <tr><td><a href="<?php echo 'http://', $riga["link"];   ?>"> <span class="glyphicon glyphicon-download"></span></a></td><?php
            }
            echo "<td>" . $riga["titolo"] . "</td>";
            echo "<td>" . $riga["autore"] . "</td>";
            echo "<td>" . $riga["inserito"] . "</td>";
            echo "<td>" . $riga["nome"] . "</td>";
            echo "</tr>";
        }
        echo "</table>";
        mysql_close();
        }
        ?>
</div>

<script type="text/javascript" src="bower_components/jquery/dist/jquery.js"></script>
<script type="text/javascript" src="bower_components/jquery-ui/jquery-ui.js"></script>
<script type="text/javascript" src="scriptIndex.js"></script>
</body>
</html>

