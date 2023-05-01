INSERT INTO person(
    Email,
    FirstName,
    LastName,
    Nationality,
    Phone,
    Address
)
VALUES(
    "teddy.khoury6@gmail.com",
    "Teddy",
    "El Khoury",
    "Lebanese",
    "96176411986",
    "Nahr Ibrahim"
),(
    "yorgoyounes30@gmail.com",
    "Yorgo",
    "Younes",
    "Lebanese",
    "96181212715",
    "Jeddayel"
),(
    "jasondirany33@gmail.com",
    "Jason",
    "Dirani",
    "Lebanese",
    "96171129698",
    "Jbeil"
),(
    "ahmad.houssein@isae.edu.lb",
    "Ahmad",
    "Houssein",
    "Lebanese",
    "96103265614",
    "Mechan, Jbeil"
),(
    "akram.karim@gmail.com",
    "Akram",
    "Karim",
    "Lebanese",
    "96112345678",
    "Jbeil"
),(
    "joe.obeid@hotmail.com",
    "Joe",
    "Obeid",
    "Lebanese",
    "96112345679",
    "Bekaa"
);
INSERT INTO CLIENT(Email, TYPE, BirthDate)
VALUES(
    "teddy.khoury6@gmail.com",
    "admin",
    "2003-11-15"
),(
    "yorgoyounes30@gmail.com",
    "admin",
    "2004-01-01"
),(
	"jasondirany33@gmail.com", 
	"admin", 
	"2002-12-13"
),(
	"ahmad.houssein@isae.edu.lb", 
	"admin", 
	"2004-06-26"
);
INSERT INTO supplier(Email, CompanyName)
VALUES(
	"akram.karim@gmail.com", 
	"Free Lancer"
),(
	"joe.obeid@hotmail.com", 
	"OLX"
);