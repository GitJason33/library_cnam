<?php
  require "./../php/connect.php";
    $email = "test@yopmail.com";
    $fname = "First Name";
    $lname = "Last Name";
    $natio = "Lebanese";
    $phone = "+961 00 00 00 00";
    $addr = "Beyrouth";
    $pw = "NaN";
    $coins = 0;
    $type = "client";
    $bdate = "00-00-0000";

  if(isset($_GET['email'])){
    $email = $_GET['email'];
    $req = "SELECT * FROM person, client WHERE person.Email = client.Email";
    $sel = mysqli_query($connection, $req);
    $row = mysqli_fetch_row($sel);

    $email = $row[0];
    $fname = $row[1];
    $lname = $row[2];
    $natio = $row[3];
    $phone = $row[4];
    $addr = $row[5];
    $pw = $row[6];
    $coins = $row[8];
    $type = $row[9];
    $bdate = $row[10];
  }
  
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CNAM Library</title>

  <!-- import css -->
  <link rel="stylesheet" href="../css/main.css"/>
  <link rel="stylesheet" href="../css/profile.css">

  <!-- import JavaScript -->
  <script src="../js/main.js" defer></script>
</head>
<body>
  <header id="profile" class="level-2"></header>
  <nav id="navBar"></nav>
  <form id="searchLayer"></form>
  <aside id="menu"></aside>

  <main>
    <div class="container">
      <h1 class="aTitle">My Profile</h1>

      <section id="icon">
        icon
      </section>

      <section id="fullname">
        <?= $fname ." ". $lname ?>
      </section>

      <table>
        <tr id="balance">
          <th>Balance: </th>
          <td><img src="../../media/images/icons/coin.svg" alt="coin"/>
          <input type="text" value="<?= $coins ?>" readonly/></td>
        </tr>
  
        <tr id="email">
          <th>Email: </th>
          <td><input type="text" value="<?= $email ?>" readonly/></td>
        </tr>
  
        <tr id="phone">
          <th>Phone: </th>
          <td><input type="text" value="<?= $phone ?>" readonly/></td>
        </tr>
  
        <tr id="address">
          <th>Address: </th>
          <td><input type="text" value="<?= $addr ?>" readonly/></td>
        </tr>
  
        <tr id="country">
          <th>Country: </th>
          <td><input type="text" value="<?= $natio ?>" readonly/></td>
        </tr>
      </table>
    </div>
  </main>

  <footer></footer>
</body>
</html>