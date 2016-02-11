<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Devi accedere - Scam Appunti</title>
    <link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap.css"/>
    <link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap-theme.css"/>
    <link rel="stylesheet" type="text/css" href="animate.css"/>
    <link rel="stylesheet" type="text/css" href="bower_components/jquery-ui/themes/base/all.css"/>
    <link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
<div class="container">
    <?php

    require "connessione.php";

    session_start();

    if (isset($_POST['submit'])) { // if form has been submitted

        // checks it against the database

        $check = mysql_query("SELECT * FROM utenti WHERE username = '" . $_POST['username'] . "'") or die(mysql_error());


        //Gives error if user dosen't exist

        $check2 = mysql_num_rows($check);

        if ($check2 == 0) {

            die('Impssibile accedere con questo nome utente');

        }

        while ($info = mysql_fetch_array($check)) {

            //$_POST['pass'] = stripslashes($_POST['pass']);


            $_POST['pass'] = md5($_POST['pass']);


            //gives error if the password is wrong

            if ($_POST['pass'] != $info['password']) {

                die('Impssibile accedere con questa password');

            } else

                $_SESSION['username'] = $info['username'];
            $_SESSION['livello'] = $info['livello'];
            $_SESSION['id'] = $info['id'];

            header("Location: home.php");


        }

    }
    ?>
    <div class="row" id="logo"></div>
    <form onsubmit="return filled()" method="post">

        <div class="row">
            <div class="col-md-offset-4 col-md-4">

                <form  class="form-horizontal">
                    <div class="row log">
                        <div class="col-xs-6">
                            <label for="user">Username</label>
                        </div>
                        <div class="col-xs-6">
                            <input id="user" name="username" type="text" >
                        </div>
                    </div>
                    <div class="row log">
                        <div class="col-xs-6">
                            <label for="psw">Password</label>
                        </div>
                        <div class="col-xs-6">
                            <input id="psw" name="pass" type="password" >
                        </div>
                    </div>
                    <div class="row log">
                        <div class="col-xs-12">
                            <button type="submit" name="submit" class="btn btn-primary" id="login">
                                Login
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
<script type="text/javascript" src="scriptIndex.js"></script>

</body>
</html>