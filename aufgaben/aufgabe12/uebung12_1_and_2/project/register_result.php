<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Result</title>
    <link rel="stylesheet" href="./register_result.css">
</head>

<body>
    <header>
        <h1>You've successfully registered yourself!</h1>
    </header>
    <main>
        <div class="registration-results">
           <p> Your registration was successfull! <p>
        </div>
        <div>
            <a href="./register.php">Back to registration</a>
            <a href="./login.php">Login</a>
        </div>
    </main>
    <footer>
        <p>© Mario Hönighausen</p>
    </footer>
   <?php 
    session_start();
    unset($_SESSSION);
    session_destroy();
   ?>
</body>

</html>