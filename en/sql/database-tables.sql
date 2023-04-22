ALTER DATABASE dbname CHARACTER SET utf8 COLLATE utf8_general_ci;

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
  `likes` INT NOT NULL DEFAULT 0,
  `dislikes` INT NOT NULL DEFAULT 0,
  `PublishingHouse` varchar(100) NOT NULL,
  PRIMARY KEY (`IdBook`)
);

DROP TABLE IF EXISTS `person`;
CREATE TABLE IF NOT EXISTS `person` (
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `Nationality` varchar(50) NOT NULL,
  `Phone` varchar(20) NOT NULL UNIQUE KEY,
  `Email` varchar(100) NOT NULL UNIQUE KEY,
  `Address` varchar(200) NOT NULL,
  PRIMARY KEY (`Email`)
);

DROP TABLE IF EXISTS `supplier`;
CREATE TABLE IF NOT EXISTS `supplier` (
  `Email` varchar(20) NOT NULL PRIMARY KEY,
  `CompanyName` varchar(100) NOT NULL,
   FOREIGN KEY (`Email`) REFERENCES `person`(`Email`) ON DELETE CASCADE
);

DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
  `Email` varchar(20) NOT NULL PRIMARY KEY,
  `CoinsCli` int NOT NULL,
  `Type` VARCHAR(10) NOT NULL DEFAULT 'client' CHECK (`type` IN ('admin', 'client')),
  `BirthDate` date NOT NULL,
  FOREIGN KEY (`Email`) REFERENCES `person`(`Email`) ON DELETE CASCADE
);


DROP TABLE IF EXISTS `buy`;
CREATE TABLE IF NOT EXISTS `buy` (
  `Email` int NOT NULL,
  `IdBook` int NOT NULL,
  `Date` date NOT NULL,
  `Quantity_b` int NOT NULL,
  FOREIGN KEY (`Email`) REFERENCES `person`(`Email`) ON DELETE CASCADE,
  FOREIGN KEY (`Email`) REFERENCES `book`(`IdBook`) ON DELETE CASCADE,
  PRIMARY KEY (`Email`,`IdBook`)
);

DROP TABLE IF EXISTS `comment`;
CREATE TABLE IF NOT EXISTS `comment` (
  `Email` int NOT NULL,
  `IdBook` int NOT NULL,
  `Comment` text NOT NULL,
  `Likes` int NOT NULL,
  FOREIGN KEY (`Email`) REFERENCES `person`(`Email`) ON DELETE CASCADE,
  FOREIGN KEY (`IdBook`) REFERENCES `book`(`IdBook`) ON DELETE CASCADE,
  PRIMARY KEY (`Email`,`IdBook`)
);

DROP TABLE IF EXISTS `supply`;
CREATE TABLE IF NOT EXISTS `supply` (
  `Email` int NOT NULL,
  `BookId` varchar(20) NOT NULL,
  `Date` date NOT NULL,
  `Quantity_s` int NOT NULL,
  PRIMARY KEY (`Email`, `BookId`),
  FOREIGN KEY (`Email`) REFERENCES `person`(`Email`) ON DELETE CASCADE,
  FOREIGN KEY (`BookId`) REFERENCES `book`(`BookId`) ON DELETE CASCADE
);

DROP TABLE IF EXISTS `borrow`;
CREATE TABLE IF NOT EXISTS `borrow` (
  `Email` int NOT NULL,
  `BookId` varchar(20) NOT NULL,
  `Borrow_Date` date NOT NULL,
  `Due_Date` date NOT NULL,
  `Return_Date` date NOT NULL,
  PRIMARY KEY (`Email`, `BookId`),
  FOREIGN KEY (`Email`) REFERENCES `person`(`Email`) ON DELETE CASCADE,
  FOREIGN KEY (`BookId`) REFERENCES `book`(`BookId`) ON DELETE CASCADE
);
