DROP DATABASE IF EXISTS `cnam_library`;
CREATE DATABASE IF NOT EXISTS `cnam_library`;
USE `cnam_library`;
ALTER DATABASE cnam_library charset='utf16';

DROP TABLE IF EXISTS `book`;
CREATE TABLE IF NOT EXISTS `book` (
  `IdBook` int NOT NULL AUTO_INCREMENT,
  `Title` varchar(200) NOT NULL,
  `Author` varchar(100) NOT NULL,
  `Genre` varchar(50) NOT NULL,
  `PriceBought` decimal(10,2) NOT NULL,
  `PriceSold` decimal(10,2) NOT NULL,
  `Summary` longtext NOT NULL,
  `Quantity` int NOT NULL,
  `Likes` INT NOT NULL DEFAULT 0,
  `Dislikes` INT NOT NULL DEFAULT 0,
  `PublishingHouse` varchar(100) NOT NULL,
  PRIMARY KEY (`IdBook`)
);

DROP TABLE IF EXISTS `person`;
CREATE TABLE IF NOT EXISTS `person` (
  `Email` varchar(150) NOT NULL UNIQUE KEY,
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `Nationality` varchar(50) NOT NULL,
  `Phone` varchar(20) NOT NULL UNIQUE KEY,
  `Address` text NOT NULL,
  `password` varchar(200) NOT NULL,
  PRIMARY KEY (`Email`)
);

DROP TABLE IF EXISTS `supplier`;
CREATE TABLE IF NOT EXISTS `supplier` (
  `Email` varchar(150) NOT NULL,
  `CompanyName` varchar(100) NOT NULL,
   FOREIGN KEY (`Email`) REFERENCES `person`(`Email`) ON DELETE CASCADE,
   PRIMARY KEY (`Email`)
);

DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
  `Email` varchar(150) NOT NULL,
  `CoinsCli` int NOT NULL DEFAULT 0,
  `Type` VARCHAR(10) NOT NULL DEFAULT 'client' CHECK (`type` IN ('admin', 'client')),
  `BirthDate` date NOT NULL,
  FOREIGN KEY (`Email`) REFERENCES `person`(`Email`) ON DELETE CASCADE,
  PRIMARY KEY (`Email`)
);

DROP TABLE IF EXISTS `buy`;
CREATE TABLE IF NOT EXISTS `buy` (
  `Email` varchar(150) NOT NULL,
  `IdBook` int NOT NULL,
  `Date` date NOT NULL,
  `Quantity_b` int NOT NULL,
  FOREIGN KEY (`Email`) REFERENCES `person`(`Email`) ON DELETE CASCADE,
  FOREIGN KEY (`Email`) REFERENCES `book`(`IdBook`) ON DELETE CASCADE,
  PRIMARY KEY (`Email`,`IdBook`)
);

DROP TABLE IF EXISTS `comment`;
CREATE TABLE IF NOT EXISTS `comment` (
  `Email` varchar(150) NOT NULL,
  `IdBook` int NOT NULL,
  `Comment` text NOT NULL,
  `Likes` int NOT NULL DEFAULT 0,
  FOREIGN KEY (`Email`) REFERENCES `person`(`Email`) ON DELETE CASCADE,
  FOREIGN KEY (`IdBook`) REFERENCES `book`(`IdBook`) ON DELETE CASCADE,
  PRIMARY KEY (`Email`,`IdBook`)
);

DROP TABLE IF EXISTS `supply`;
CREATE TABLE IF NOT EXISTS `supply` (
  `Email` varchar(150) NOT NULL,
  `IdBook` int NOT NULL,
  `Date_s` date NOT NULL,
  `Quantity_s` int NOT NULL,
  FOREIGN KEY (`Email`) REFERENCES `person`(`Email`) ON DELETE CASCADE,
  FOREIGN KEY (`IdBook`) REFERENCES `book`(`IdBook`) ON DELETE CASCADE,
  PRIMARY KEY (`Email`,`IdBook`)
);

DROP TABLE IF EXISTS `borrow`;
CREATE TABLE IF NOT EXISTS `borrow` (
  `Email` varchar(150) NOT NULL,
  `IdBook` int NOT NULL,
  `BorrowDate` date NOT NULL,
  `DueDate` date NOT NULL,
  FOREIGN KEY (`Email`) REFERENCES `person`(`Email`) ON DELETE CASCADE,
  FOREIGN KEY (`IdBook`) REFERENCES `book`(`IdBook`) ON DELETE CASCADE,
  PRIMARY KEY (`Email`, `IdBook`)
);

DROP TABLE IF EXISTS `favorite`;
CREATE TABLE IF NOT EXISTS `favorite` (
  `Email` varchar(150) NOT NULL,
  `IdBook` int NOT NULL,
  FOREIGN KEY (`Email`) REFERENCES `person`(`Email`) ON DELETE CASCADE,
  FOREIGN KEY (`IdBook`) REFERENCES `book`(`IdBook`) ON DELETE CASCADE,
  PRIMARY KEY (`Email`, `IdBook`)
);