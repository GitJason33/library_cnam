import { header } from "./main.js";

const iconLinks = {
  logo: "media/images/logo.svg",
  profile: "media/images/icons/profile-circle.svg",

  lang: "media/images/icons/translate.svg",
  english: "media/images/icons/country/uk.svg",
  french: "media/images/icons/country/france.svg",
  arabic: "media/images/icons/country/lebanon.svg",

  home: "media/images/icons/home.svg",
  search: "media/images/icons/search.svg",
  coin: "media/images/icons/coin.svg",
  menu: "media/images/icons/menu.svg",

  cart: "media/images/icons/shopping-cart.svg",
  apple: "media/images/icons/payment/apple-pay.svg",
  mastercard: "media/images/icons/payment/mastercard.svg",
  visa: "media/images/icons/payment/visa-classic.svg",
  wu: "media/images/icons/payment/western-union.svg",

  email: "media/images/icons/social/email.svg",
  instagram: "media/images/icons/social/instagram.svg",
  facebook: "media/images/icons/social/facebook.svg",
  twitter: "media/images/icons/social/twitter.svg"
};

const pageLinks = {
  home: "index.html",
  login: "en/account/login.html",
  register: 'en/account/register',

  cart: "",
  trending: "",
  categories: "",
  favorites: "",
  about: "en/about-us.html",
  contribute: "",
  contact: "en/contact-us.html"
};

const socialMedia = {
  email: "mailto:info@isae.edu.lb",
  instagram: "http://instagram.com/_u/CNAM.Liban/", 
  facebook: "https://www.facebook.com/CNAM Liban/",
  twitter: "https://twitter.com/cnamLiban?s=20"
};

// this function checks the location of a file based on which folder level we are
function checkLinks(links){
  let updated = {};
  let checkLevel = header.className.slice(header.className.length - 1);

  for(let x in links){
    updated[x] = links[x];
    for(let i = 0; i < checkLevel; i++)
      updated[x] = "../" + updated[x];
  }
  return updated;
}

// export variables to use them
export { 
  iconLinks, 
  pageLinks, 
  socialMedia, 
  checkLinks 
};