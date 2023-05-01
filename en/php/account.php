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
        INSERT INTO `person` (Email, FirstName, LastName, Nationality, Phone, Address, password)
        VALUES ($email, $fname, $lname, $country, $phone, $addr, $pw)
    ";
    mysqli_query($connection, $req);
    $req = "
        INSERT INTO `client` (Email, BirthDate)
        VALUES ($email, $bDay)
    ";
    mysqli_query($connection, $req);
    
    echo("
        <h1>Account <span style='color:crimson'>$email</span> was successfully created!</h1>
        Go back to home page <a href='../../index.html'>here</a>
    ");
}

if(isset($_POST['login'])){
    $error = "";
    $email = $_POST['email'];
    $pw = $_POST['password'];

    $req = "SELECT Password FROM person WHERE Email = '$email'";
    $sel = mysqli_query($connection, $req);
    $row = mysqli_fetch_row($sel);
    if($row[0] != null){
        if($pw == $row[0]){
            header("location: ./../account/profile.php?email=$email");
            die();
        } else{
            $error = "Incorrect-Password";
            header("location: ./../account/login.php?error=$error");
            die();
        }  
    } else{
        $error = "Incorrect_Email";
        header("location: ./../account/login.php?error=$error");
        die();
    }
     
    
}
?>