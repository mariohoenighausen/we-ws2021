<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./login.css">
</head>

<body>
    <header>
        <h1>LogIn with your credentials</h1>
    </header>
    <main>
        <div class="form-container">
            <form action="./includes/login.inc.php" method="post">
                <div class="input-container">
                    <label for="username">Username</label>
                    <input type="text" name="username" minlength="1" required>
                    <label for="username" class="hidden"></label>
                </div>
                <div class="input-container">
                    <label for="password">Password</label>
                    <input type="password" name="password" minlength="8" required>
                    <label for="password" class="hidden"></label>
                </div>
                <button type="submit" class="login-btn">Login</button>
            </form>
            <a href="register.php">Register</a>
        </div>
        
    </main>
    <footer>
        <p>© Mario Hönighausen </p>
    </footer>
    <?php 
        session_start();

        if(isset($_SESSION['error'])){
            echo $_SESSION['error'] . "\n";
        }
    ?>
</body>

</html>