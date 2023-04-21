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
            if($quantity == 0) {$inStock = "Out Of Stock";}
            echo("
            <fieldset class='search-result'>
                <legend id='result-title'>$title</legend>

                <div class='left'>
                <section class='result-img'>
                    <img src='../../media/books/$idBook.webp' alt='item'>
                </section>

                <section class='result-infos'>
                    <span>Genre: $genre</span>
                    <span>Author: $author</span>
                    <span>PH: $publishingHouse</span>
                    <span>$priceSold USD</span>
                    <span>Qty: $quantity</span>
                    <span>$inStock</span>
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