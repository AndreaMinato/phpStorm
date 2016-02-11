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
        $insert = "INSERT INTO utenti (id, username, password, nome, cognome, livello, email) VALUES ('','" . $_POST['user'] . "', '" . md5($_POST['psw']) . "','" . $_POST['nome'] . "','" . $_POST['cognome'] . "','" . $_POST['liv'] . "','" . $_POST['email'] . "')";
        $mail_corpo="Benvenuto in scamAppunti, Le sue credenziali sono \n Username:". $_POST['user']. " \n Password:". $_POST['psw'];
        mail($_POST['mail'], "Iscrizione scam appunti", $mail_corpo);
            /*echo "Messaggio inviato con successo";
        else
            echo "Errore. Nessun messaggio inviato.";*/
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

            <form onsubmit="return add()"  method="post">

                <div class="row">
                    <div class="col-md-offset-4 col-md-4">

                        <form class="form-horizontal">
                            <div class="row log">
                                <div class="col-xs-6">
                                    <label for="nome">Nome</label>
                                </div>
                                <div class="col-xs-6">
                                    <input id="nome" name="nome" type="text" onkeyup="createuser()">
                                </div>
                            </div>
                            <div class="row log">
                                <div class="col-xs-6">
                                    <label for="cognome">Cognome</label>
                                </div>
                                <div class="col-xs-6">
                                    <input id="cognome" name="cognome" type="text" onkeyup="createuser()">
                                </div>
                            </div>
                            <div class="row log">
                                <div class="col-xs-6">
                                    <label for="email">E-mail</label>
                                </div>
                                <div class="col-xs-6">
                                    <input id="email" name="email" type="text">
                                </div>
                            </div>
                            <div class="row log">
                                <div class="col-xs-6">
                                    <label for="user">Username</label>
                                </div>
                                <div class="col-xs-6">
                                    <input id="user" name="user" type="text">
                                </div>
                            </div>
                            <div class="row log">
                                <div class="col-xs-1">
                                    <div class="btn btn-primary" onclick="generate()"><span class="glyphicon glyphicon-refresh"></span></div>
                                </div>
                                <div class="col-xs-5">
                                    <label for="psw">Password</label>
                                </div>
                                <div class="col-xs-6">
                                    <input id="psw" name="psw" type="text">
                                </div>
                            </div>
                            <div class="row log">
                                <div class="col-xs-6">
                                    <label for="liv">Livello</label>
                                </div>
                                <div class="col-xs-6">
                                    <select id="liv" name="liv" onchange="amministratore()">
                                        <option value=1>Livello Alto</option>
                                        <option value=2>Livello Medio</option>
                                        <option value=3>Livello Basso</option>
                                        <option value=0>Amministratore</option>
                                    </select>
                                </div>

                            </div>
                            <div class="row log">
                                <div class="col-xs-12">
                                    <button type="submit" name="submit" class="btn btn-primary" id="register">
                                        Aggiungi Membro
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
        <script type="text/javascript" src="scriptMembro.js"></script>


        </body>
        </html>
        <?php

    }
}
?>

