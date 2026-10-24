import "./styles.css";
import {createHomePage} from "./home.js";
import {createMenu} from "./menu.js";
import {createContact} from "./contact.js";

// Call the home page first so it always appears on startup
createHomePage();

// Select our container so it can be cleared
const displayContainer = document.getElementById("content");

// Declare all of our button variables
const homePageBtn = document.getElementById("home-btn");
const menuPageBtn = document.getElementById("menu-btn");
const contactPageBtn = document.getElementById("contact-btn");

// Takes in the btn variable and function call for page as parameters, once clean function as opposed to three.
function tabSwitch(button, page){
    button.addEventListener('click', (event) => {
        displayContainer.replaceChildren();
        page();
    });
}

tabSwitch(homePageBtn, createHomePage);
tabSwitch(menuPageBtn, createMenu);
tabSwitch(contactPageBtn, createContact);