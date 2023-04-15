// main component's file
const header = document.querySelector("header");

console.time("headTime");
const loading = () => {
  addHeader();
  addNavBar();
  addMenu();
  addSearchLayer();
  addFooter();
}
console.timeEnd("headTime");

function addHeader(){
  let links = {
    logo: "media/images/logo.svg",
    theme: "media/images/icons/moon.svg",
    profile: "media/images/icons/profile-circle.svg",
    lang: "media/images/icons/translate.svg",
    english: "media/images/icons/country/uk.svg",
    french: "media/images/icons/country/france.svg",
    arabic: "media/images/icons/country/lebanon.svg",
    login: "en/account/login.html"
  };
  links = checkLinks(links);

  header.innerHTML = `
    <section id="logo">
      <img src="${links['logo']}" alt="Logo">
    </section>

    <section id="bigTitle" class="aTitle">
      CNAM Library
    </section>

    <section id="accessibility">
      <div id="profile" title="profile">
        <img src="${links['profile']}" alt="account" />
        <br/>
        <strong>Login</strong>
      </div>

      <div id="language" title="choose your language">
        <img src="${links['lang']}" alt="language" />

        <aside id="langs">
          <div class="english">
            <img src="${links['english']}" >
            <span>English</span>
          </div>

          <div class="french">
            <img src="${links['french']}">
            <span>Français</span>
          </div>

          <div class="arabic">
            <img src="${links['arabic']}">
            <span>العربية</span>
          </div>
        </aside>
      </div>
    </section>
  `;

  document.querySelector("#profile").addEventListener
  ('click', () => window.open(links['login']))
};

function addNavBar(){
  let links = {
    mainPage: "index.html",
    // icons
    home: "media/images/icons/home.svg",
    search: "media/images/icons/search.svg",
    coin: "media/images/icons/coin.svg",
    menu: "media/images/icons/menu.svg"
  };
  links = checkLinks(links);

  document.querySelector("#navBar").innerHTML = `
  <section id="leftNav">
    <div id="homeButton" onclick="window.open('${links['mainPage']}', '_self')">
      <span>HOME</span>
      <img src="${links['home']}" alt="home">
    </div>

    <div id="searchBar" title="search">
      <span>SEARCH</span>
      <img src="${links['search']}">
    </div>
  </section>

  <section id="rightNav">
    <div id="coinBalance" title="your coins">
      <label>0</label>
      <img src="${links['coin']}">
    </div>

    <div id="sideMenu" title="menu">
      <img src="${links['menu']}"/>
    </div>
  </section>
  `;
};

function addSearchLayer(){
  let searchLayer = document.querySelector("#searchLayer");

  // ADD form infos here
  searchLayer.method = "get";
  searchLayer.action = "#";

  let links = checkLinks({
    search: "media/images/icons/search.svg"
  });
  let selection = "";
  let options = [
    "All",
    "Science-Fiction",
    "Self-Imporvement",
    "Sports",
    "Biography",
    "Geography",
    "Action",
    "Thriller",
    "Comedy"
  ];
  // add options depending on array
  for(let i in options)
   selection += `<option value="${options[i]}">${options[i]}</option>\n`;

  searchLayer.innerHTML = `
  <div>
    <h1 class="aTitle">Search a book</h1>
    <span class="closeSearch">x</span>
  </div>
  <div class="searchPart">
    <label>
      <img src="${links['search']}"/>
      <input type="text" placeholder="Search..." name="search" required>
    </label>
    <button type="submit">Enter</button>
  </div>
  <select name="category-search" id="category-search">
    ${selection}
  </select>
  `;
  
  // add respective events
  document.querySelector("#searchBar").addEventListener("click", () => {
    searchLayer.style.visibility = 'visible';
    searchLayer.style.opacity = "100%";
  });

  document.querySelector(".closeSearch").addEventListener("click", () => {
    searchLayer.style.visibility = 'hidden';
    searchLayer.style.opacity = "0";
  });
}

function addMenu(){
  let links = {
    cartIcon: "media/images/icons/shopping-card.svg",
    
    // page links
    cart: "",
    trending: "",
    categories: "",
    favorites: "",
    aboutUs: "en/about-us.html",
    contribute: "",
    contactUs: "en/contact-us.html"
  };
  links = checkLinks(links);
  
  document.querySelector("#menu").innerHTML = `
  <span id="closeMenu">x</span>
  <section class="aTitle">Menu</section>
  <a href="${links['cart']}">
    Cart
    <img src="${links['cartIcon']}">
  </a>
  <a href="${links['trending']}">Trending</a>
  <a href="${links['categories']}">Categories</a>
  <a href="${links['favorites']}">Favorites</a>
  <a href="${links['aboutUs']}">About us</a>
  <a href="${links['contribute']}">Contribute</a>
  <a href="${links['contactUs']}">Contact us</a>
  `;

  // events onclick for menu button
  // open side menu
  document.querySelector("#sideMenu").addEventListener("click", () => {
    let currentWidth = window.innerWidth;
    let menu = document.querySelector("#menu");
    
    if(currentWidth <= 500){
      menu.style.height = "100%";
      menu.style.width = "100%";
    }else{
      menu.style.width = "300px";
      menu.style.height = "100%";
    }
    menu.style.visibility = 'visible';
  });

  // close side menu
  document.querySelector("#closeMenu").addEventListener("click", () =>{
    let currentWidth = window.innerWidth;
    let menu = document.querySelector("#menu");

    
    if(currentWidth <= 500)
    menu.style.height = "0";
    else
    menu.style.width = "0";
    
    menu.style.visibility = 'hidden';
  });
};

function addFooter(){
  let links = {
    // payment methods
    apple: "media/images/icons/payment/apple-pay.svg",
    mastercard: "media/images/icons/payment/mastercard.svg",
    visa: "media/images/icons/payment/visa-classic.svg",
    wu: "media/images/icons/payment/western-union.svg",

    // social icons
    email: "media/images/icons/social/email.svg",
    instagram: "media/images/icons/social/instagram.svg",
    facebook: "media/images/icons/social/facebook.svg",
    twitter: "media/images/icons/social/twitter.svg"
  };
  links = checkLinks(links);

  // links to social media accounts
  let email = "info@isae.edu.lb";
  let instagram = "http://instagram.com/_u/CNAM.Liban/";
  let facebook = "https://www.facebook.com/CNAM Liban/";
  let twitter = "https://twitter.com/cnamLiban?s=20";

  document.querySelector('footer').innerHTML = `
  <section id="leftFoot">
    <h1 class="aTitle">Infos:</h1>
    <ul id="footInfo">
      <li>Copyright 2023 &copy;</li>
      <li>Based in Lebanon</li>
      <li>University of CNAM - Lebanon</li>
      <li>
        <img src="${links['apple']}">
        <img src="${links['mastercard']}">
        <img src="${links['visa']}">
        <img src="${links['wu']}">
      </li>
    </ul>
  </section>

  <section id="rightFoot">
    <h1 class="aTitle">Social media:</h1>
    <div>
      <div class="email">
        <img src="${links['email']}">
        <a href="mailto:${email}">info@isae.edu.lb</a>
      </div>

      <div class="instagram">
        <img src="${links['instagram']}">
        <a href="${instagram}">CNAM.Liban</a>
      </div>

      <div class="facebook">
        <img src="${links['facebook']}">
        <a href="${facebook}">CNAM Liban</a>
      </div>

      <div class="twitter">
        <img src="${links['twitter']}">
        <a href="${twitter}">CNAM Liban</a>
      </div>
    </div>
  </section>
  `;
};

// this function check the location of a file based on which folder level we are
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