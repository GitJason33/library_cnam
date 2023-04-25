<?php
require "./connect.php";

if(isset($_POST['register'])){
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $bDay = $_POST['birthDate'];
    $country = $_POST['country'];
    $addr = $_POST['address'];
    $countryNumb = $_POST['country_number'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $pw = $_POST['password'];
    
    switch ($country){
        case "Lebanon": 
            $country = "Lebanese";
            $countryNumb = "961"; break;
        case "France": 
            $country = "French";
            $countryNumb = "33"; break;
        case "USA": 
            $country = "American";
            $countryNumb = "1"; break;
    }
    $phone = $countryNumb . "" . $phone;

    $req = "
        INSERT INTO `person` (Email, FirstName, LastName, Nationality, Phone, Address)
        VALUES ($email, $fname, $lname, $country, $phone, $addr)
    ";
    mysqli_query($connection, $req);
    $req = "
        INSERT INTO `client` (Email, BirthDate)
        VALUES ($email, $bDay)
    ";
    mysqli_query($connection, $req);
}

echo("
<h1>Account <span style='color:crimson'>$email</span> was successfully created!</h1>

Go back to home page <a href='../../index.html'>here</a>
");
?>