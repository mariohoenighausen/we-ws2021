<?php  

class User
{
    public $username;
    public $email;
    public $password;

    function __construct($username, $email, $password)
    {
        $this->username = $username;
        $this->email = $email;
        $this->password = $password;
    }
    function set_username($username)
    {
        $this->username = $username;
    }
    function set_email($email)
    {
        $this->email = $email;
    }
    function set_password($password)
    {
        $this->password = $password;
    }
    function get_username()
    {
        return $this->username;
    }
    function get_email()
    {
        return $this->email;
    }
    function get_password()
    {
        return $this->password;
    }
    function __toString()
    {
        return __CLASS__;
    }
}
?>