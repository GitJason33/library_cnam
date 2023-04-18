DROP TABLE IF EXISTS `book`;
CREATE TABLE IF NOT EXISTS `book` (
  `IdBook` int NOT NULL AUTO_INCREMENT,
  `Title` varchar(100) NOT NULL,
  `Author` varchar(100) NOT NULL,
  `Genre` varchar(50) NOT NULL,
  `PriceBought` decimal(10,2) NOT NULL,
  `PriceSold` decimal(10,2) NOT NULL,
  `Summary` varchar(1000) NOT NULL,
  `Quantity` int NOT NULL,
  `Points` int NOT NULL,
  `PublishingHouse` varchar(100) NOT NULL,
  PRIMARY KEY (`IdBook`)
);

DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
  `IdClient` int NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `BirthDate` date NOT NULL,
  `Nationality` varchar(50) NOT NULL,
  `Phone` varchar(20) NOT NULL UNIQUE KEY,
  `Email` varchar(100) NOT NULL UNIQUE KEY,
  `Address` varchar(200) NOT NULL,
  `Coins` int NOT NULL,
  PRIMARY KEY (`Idclient`),
);

DROP TABLE IF EXISTS `buy`;
CREATE TABLE IF NOT EXISTS `buy` (
  `IdClient` int NOT NULL,
  `IdBook` int NOT NULL,
  `Date` date NOT NULL,
  `Quantity` int NOT NULL,
  FOREIGN KEY (`IdClient`) REFERENCES `client`(`IdClient`) ON DELETE CASCADE,
  FOREIGN KEY (`IdBook`) REFERENCES `book`(`IdBook`) ON DELETE CASCADE,
  PRIMARY KEY (`IdClient`,`IdBook`)
);

DROP TABLE IF EXISTS `comment`;
CREATE TABLE IF NOT EXISTS `comment` (
  `IdClient` int NOT NULL,
  `IdBook` int NOT NULL,
  `Comment` text NOT NULL,
  `Likes` int NOT NULL,
  FOREIGN KEY (`IdClient`) REFERENCES `client`(`IdClient`) ON DELETE CASCADE,
  FOREIGN KEY (`IdBook`) REFERENCES `book`(`IdBook`) ON DELETE CASCADE,
  PRIMARY KEY (`IdClient`,`IdBook`)
);