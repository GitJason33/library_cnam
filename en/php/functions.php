<?php
require('./connect.php');

function afficherLivres($query){
    global $connection;
    $result = mysqli_query($connection, $query);
    if($result){
        while($row = mysqli_fetch_row($result)){
            $idBook = $row[0];
            $title = $row[1];
            $author = $row[2];
            $genre = $row[3];
            $priceBought = $row[4];
            $priceSold = $row[5];
            $summary = $row[6];
            $quantity = $row[7];
            $points = $row[8];
            $publishingHouse = $row[9];

            $inStock = "In Stock";
            $color = "green";
            if($quantity == 0) {
                $inStock = "Out Of Stock";
                $color = "crimson";
            }
            echo("
            <fieldset class='search-result'>
                <legend id='result-title'>$title</legend>

                <div class='left'>
                <section class='result-img'>
                    <img src='../../media/books/$idBook.webp' alt='item'>
                </section>

                <section class='result-infos'>
                    <li>Genre: $genre</li>
                    <li>Author: $author</li>
                    <li>PH: $publishingHouse</li>
                    <li>$priceSold USD</li>
                    <li>Qty: $quantity</li>
                    <li style='color:$color;'>$inStock</li>
                </section>
                </div>
                
                <section class='result-details'>
                <a href='./displayBook.php?idBook=$idBook'>more ></a>
                </section>
            </fieldset>
            ");
        }
    } else{
        die('DataBase request error');
    }
}

?>