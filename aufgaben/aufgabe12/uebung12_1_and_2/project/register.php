<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register form</title>
    <link rel="stylesheet" href="./register.css">
</head>

<body>
    <?php 
        session_start();
    ?>
    <header>
        <h1>Registration form</h1>
    </header>
    <main>
    <div class="form-container">
        <form action="./includes/register.inc.php" method="post">
            <div class="input-container">
                <label for="username">Username</label>
                <input type="text" name="username" minlength="1" required value=<?php if(isset($_SESSION['username'])){
                    echo $_SESSION['username'];
                }
                ?>>
                <label for="username" class="hidden"></label>
            </div>
            <div class="input-container">
                <label for="email">Email</label>
                <input type="email" name="email" minlength="6" required value=<?php if(isset($_SESSION['email'])){
                    echo $_SESSION['email'];
                }
                ?>>
                <label for="email" class="hidden"></label>
            </div>
            <div class="input-container">
                <label for="password">Password</label>
                <input type="password" name="password" minlength="8" id="password" required value=<?php if(isset($_SESSION['password'])){
                    echo $_SESSION['password'];
                }?>>
                <label for="password" class="hidden"></label>
            </div>
            <div class="input-container">
                <label for="repeatedpassword">Repeat your password</label>
                <input type="password" name="repeatedpassword" oninput="checkRepeatedPW()" id="reapeated-password" minlength="8" required>
                <label for="repeatedpassword" class="hidden"></label>
            </div>
            <button type="submit" class="register-btn">Register</button>    
        </form>
        <a href="login.php" class="login-btn">login</a>
    </div>
    <div>
        <?php 
            if(isset($_SESSION['error']) && sizeof($_SESSION['error']) > 0){
                echo implode($_SESSION['error']);
            }
            
        session_destroy();
        ?>
    </div>
    </main>
    <footer>
        <p>© Mario Hönighausen</p>       
    </footer>
    <script>
        function checkRepeatedPW(){
            const repeatedPWInput = document.getElementById('reapeated-password');
            const pWInput = document.getElementById('password');
            if(repeatedPWInput.value !== pWInput.value){
                repeatedPWInput.style.backgroundColor = "red";
            }
            else{
                repeatedPWInput.style.backgroundColor = "green";
            }
        }
    </script>
</body>

</html>