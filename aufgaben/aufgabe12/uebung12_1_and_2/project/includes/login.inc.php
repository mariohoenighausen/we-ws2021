<?php 
    session_start();
    if(isset($_POST["username"]) AND isset($_POST["password"])){
        echo $_REQUEST['username'];
        $_SESSION['username'] = $_REQUEST['username'];
        $_SESSION['password'] = $_REQUEST['password'];
        $str = file_get_contents('../../data.json');
        $usersJson = json_decode($str, true);
        $storedUsers = $usersJson['users'];
        $userPwHash = "";
        foreach($storedUsers as $user){
            if(password_verify(strval($_SESSION['password']),$user['password']) && password_verify(strval($_SESSION['username']), $user['username'])){
                header("location: ../www_main.php");
                exit;
            }
        }
        $_SESSION['error'] = "Your credentials were invalid!";
        $_SESSION['login_attempts']++;
        header("location: ../login.php"); 
        exit;
    }
    else{
        $_SESSION['error'] = "Your credentials were invalid!";
       header("location: ../login.php"); 
    }
?>