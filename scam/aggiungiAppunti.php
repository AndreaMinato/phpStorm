<?php
require "connessione.php";
session_start();
if ($_SESSION['id'] == null)
    header("Location: index.php");
else {
    $user = $_SESSION['username'];
    $liv = $_SESSION['livello'];
    $id = $_SESSION['id'];



    if ($liv != 0) {
        header("location: home.php");
    }
    if (isset($_POST['submit'])) {


        // inserisco ne database
        $insert = "INSERT INTO appunti (id, titolo, autore, livello, link, inserito, rel_materia) VALUES ('','" . $_POST['titolo'] . "', '" . $_POST['autore'] . "','" . $_POST['livello'] . "','" . $_POST['link'] . "','" . $_POST['inserito'] . "','" . $_POST['materia'] . "')";
        $add_member = mysql_query($insert) or die(mysql_error());
    } else {

        ?>
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Aggiungi Membro - Scam Appunti</title>
            <link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap.css"/>
            <link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap-theme.css"/>
            <link rel="stylesheet" type="text/css" href="animate.css"/>
            <link rel="stylesheet" type="text/css" href="bower_components/jquery-ui/themes/base/all.css"/>
            <link rel="stylesheet" type="text/css" href="style.css"/>
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

            <form onsubmit="return true"  method="post">

                <div class="row">
                    <div class="col-md-offset-4 col-md-4">

                        <form class="form-horizontal">
                            <div class="row log">
                                <div class="col-xs-6">
                                    <label for="titolo">Titolo</label>
                                </div>
                                <div class="col-xs-6">
                                    <input id="titolo" name="titolo" type="text">
                                </div>
                            </div>
                            <div class="row log">
                                <div class="col-xs-6">
                                    <label for="autore">Autore</label>
                                </div>
                                <div class="col-xs-6">
                                    <input id="autore" name="autore" type="text">
                                </div>
                            </div>
                            <div class="row log">
                                <div class="col-xs-6">
                                    <label for="livello">Livello</label>
                                </div>
                                <div class="col-xs-6">
                                    <select id="livello" name="livello">
                                        <option value=1>Livello Alto</option>
                                        <option value=2>Livello Medio</option>
                                        <option value=3>Livello Basso</option>
                                    </select>
                                </div>

                            </div>
                            <div class="row log">
                                <div class="col-xs-6">
                                    <label for="link">Link</label>
                                </div>
                                <div class="col-xs-6">
                                    <input id="link" name="link" type="text">
                                </div>
                            </div>
                            <div class="row log">
                                <div class="col-xs-6">
                                    <label for="inserito">Inserito</label>
                                </div>
                                <div class="col-xs-6">
                                    <input id="inserito" name="inserito" type="text">
                                </div>
                            </div>
                            <div class="row log">
                                <div class="col-xs-6">
                                    <label for="materia">Materia</label>
                                </div>
                                <div class="col-xs-6">
                                    <select id="livello" name="livello">
                                        <option value=0>Amministrazione finanziaria enti pubblici</option>
                                        <option value=1>Comunicazione pubblica</option>
                                        <option value=2>Contabiltà pubblica</option>
                                        <option value=3>Diritto amministrativo</option>
                                        <option value=4>Diritto commerciale</option>
                                        <option value=5>Diritto dell'economia</option>
                                        <option value=6>Diritto dell'UE</option>
                                        <option value=7>Diritto del lavoro</option>
                                        <option value=8>Diritto penale</option>
                                        <option value=9>Diritto tributario</option>
                                        <option value=10>EGSP</option>
                                        <option value=11>Filosofia politica</option>
                                        <option value=12>Informatica</option>
                                        <option value=13>Informatica giuridica</option>
                                        <option value=14>Inglese</option>
                                        <option value=15>Istituzioni di diritto privato</option>
                                        <option value=16>Legislazioni delle investigazioni private</option>
                                        <option value=17>Metodologia della ricerca sociale</option>
                                        <option value=18>OGRU</option>
                                        <option value=19>Procedura penale</option>
                                        <option value=20>Psicologia sociale e forense</option>
                                        <option value=21>Politica economica</option>
                                        <option value=22>Scienze dell'amministrazione digitale</option>
                                        <option value=23>Sistemi politici e amministrativi</option>
                                        <option value=24>Sociologia</option>
                                        <option value=25>Sociologia della security</option>
                                        <option value=26>Statistica sociale</option>

                                    </select>
                                </div>
                            </div>
                            <div class="row log">
                                <div class="col-xs-12">
                                    <button type="submit" name="submit" class="btn btn-primary" id="register">
                                        Aggiungi Appunti
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </form>
        </div>

        <script type="text/javascript" src="bower_components/jquery/dist/jquery.js"></script>
        <script type="text/javascript" src="bower_components/jquery-ui/jquery-ui.js"></script>
        <script type="text/javascript" src="scriptAppunti.js"></script>


        </body>
        </html>
        <?php

    }
}
?>

