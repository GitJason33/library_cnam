// DO NOT ADD FUNCTIONS TO THIS FILE
import { iconLinks, pageLinks, socialMedia } from "./links.js";

const header = document.querySelector("header");
let icons = checkLinks(iconLinks);
let pages = checkLinks(pageLinks);

console.time("headTime");
const loading = () => {
  addHeader();
  addNavBar();
  addMenu();
  addSearchLayer();
  addFooter();
}
// this adds the event onload for body, special case with modules
document.addEventListener("DOMContentLoaded", loading);

function addHeader(){
  header.innerHTML = `
    <section id="logo">
      <img src="${icons['logo']}" alt="Logo">
    </section>

    <section id="bigTitle" class="aTitle">
      CNAM Library
    </section>

    <section id="accessibility">
      <div id="profile" title="profile">
        <img src="${icons['profile']}" alt="account" />
        <br/>
        <strong>Login</strong>
      </div>

      <div id="language" title="choose your language">
        <img src="${icons['lang']}" alt="language" />

        <aside id="langs">
          <div class="english">
            <img src="${icons['english']}" >
            <span>English</span>
          </div>

          <div class="french">
            <img src="${icons['french']}">
            <span>Français</span>
          </div>

          <div class="arabic">
            <img src="${icons['arabic']}">
            <span>العربية</span>
          </div>
        </aside>
      </div>
    </section>
  `;

  document.querySelector("#profile").addEventListener
    ('click', () => window.open(pages['login'], "_self"));
};

function addNavBar(){
  document.querySelector("#navBar").innerHTML = `
  <section id="leftNav">
    <div id="homeButton" onclick="window.open('${pages['home']}', '_self')">
      <span>HOME</span>
      <img src="${icons['home']}" alt="home">
    </div>

    <div id="searchBar" title="search">
      <span>SEARCH</span>
      <img src="${icons['search']}">
    </div>
  </section>

  <section id="rightNav">
    <div id="coinBalance" title="your coins">
      <label>0</label>
      <img src="${icons['coin']}">
    </div>

    <div id="sideMenu" title="menu">
      <img src="${icons['menu']}"/>
    </div>
  </section>
  `;
};

function addSearchLayer(){
  let searchLayer = document.querySelector("#searchLayer");

  // ADD form infos here
  searchLayer.method = "get";
  searchLayer.action = "#";

  // this one is for the search genre options
  let selection = "";
  let options = [
    "All",
    "Science-Fiction",
    "Self-Improvement",
    "Romance",
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
      <img src="${icons['search']}"/>
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
  document.querySelector("#menu").innerHTML = `
  <span id="closeMenu">x</span>
  <section class="aTitle">Menu</section>
  <a href="${pages['cart']}">
    Cart
    <img src="${icons['cart']}">
  </a>
  <a href="${pages['trending']}">Trending</a>
  <a href="${pages['categories']}">Categories</a>
  <a href="${pages['favorites']}">Favorites</a>
  <a href="${pages['about']}">About us</a>
  <a href="${pages['contribute']}">Contribute</a>
  <a href="${pages['contact']}">Contact us</a>
  `;

  // events onclick for menu button
  // open side menu
  document.querySelector("#sideMenu").addEventListener("click", () => {
    let menu = document.querySelector("#menu");
    
    if(window.innerWidth <= 500){
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
    let menu = document.querySelector("#menu");

    if(window.innerWidth <= 500)
      menu.style.height = "0";
    else
      menu.style.width = "0";
    
    menu.style.visibility = 'hidden';
  });
};

function addFooter(){
  document.querySelector('footer').innerHTML = `
  <section id="leftFoot">
    <h1 class="aTitle">Infos:</h1>
    <ul id="footInfo">
      <li>Copyright 2023 &copy;</li>
      <li>Based in Lebanon</li>
      <li>University of CNAM - Lebanon</li>
      <li>
        <img src="${icons['apple']}">
        <img src="${icons['mastercard']}">
        <img src="${icons['visa']}">
        <img src="${icons['wu']}">
      </li>
    </ul>
  </section>

  <section id="rightFoot">
    <h1 class="aTitle">Social media:</h1>
    <div>
      <div class="email">
        <img src="${icons['email']}">
        <a href="mailto:${socialMedia['email']}">info@isae.edu.lb</a>
      </div>

      <div class="instagram">
        <img src="${icons['instagram']}">
        <a href="${socialMedia['instagram']}">CNAM.Liban</a>
      </div>

      <div class="facebook">
        <img src="${icons['facebook']}">
        <a href="${socialMedia['facebook']}">CNAM Liban</a>
      </div>

      <div class="twitter">
        <img src="${icons['twitter']}">
        <a href="${socialMedia['twitter']}">CNAM Liban</a>
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

// this function will replace a button's link that points towards the current page with an empty one
// function _checkCurrentPageLink(linkArray){
  
// }
console.timeEnd("headTime");