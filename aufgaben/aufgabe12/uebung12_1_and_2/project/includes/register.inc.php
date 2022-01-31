<?php
include 'user.inc.php';
    session_start(); 
    foreach($_POST as $key => $val){
        if(!isset($_POST[$key])){
            header("location: ../register.php");
        }
        $_SESSION[$key] = $val;
    }
    $user = new User("", "", "", "");
    $_SESSION['error'] = [];
    if (isset($_SESSION['username'])) {
        $user->set_username($_SESSION['username']);
    } 
    else {
        $_SESSION['error'] . "There was a mistake with username\n";
        header("location: ../register.php");
        exit;
    }
    if (isset($_SESSION['email'])) {
        $user->set_email(password_hash($_SESSION['email'], PASSWORD_DEFAULT));
    } 
    else {
        $_SESSION['error'] . "There was a mistake with email\n";
        header("location: ../register.php");
        exit;
    }
    if (isset($_SESSION['password']) AND isset($_SESSION['repeatedpassword']) AND $_SESSION['password'] == $_SESSION['repeatedpassword'] ) {  
        $user->set_password(password_hash($_SESSION['password'], PASSWORD_DEFAULT));
    } 
    else {
        array_push($_SESSION['error'], "Your passwords were not identical\n");
        header("location: ../register.php");
        exit;
    }
        $str = file_get_contents('../../data.json');
        $usersJson = json_decode($str, true);
        $storedUsers = $usersJson['users'];
        foreach($storedUsers as $storedUser){
            if(password_verify($user->get_username(),$storedUser['username'])){
                array_push($_SESSION['error'], "The username is already taken, try a different one!");
                header("location: ../register.php"); 
                exit;
            } 
        }
        $user->set_username(password_hash($user->get_username(),PASSWORD_DEFAULT));
        array_push($storedUsers, $user);
        $storedUsersJson = ['users'=> $storedUsers];
        $appendedUserJson = json_encode($storedUsersJson);
        if (file_put_contents("../../data.json", $appendedUserJson, LOCK_EX)) {
            echo strval($user);
            header("location: ../register_result.php");
        } 
        else {
            $_SESSION['error'] . "There was a server error, try again later";
        }
?>