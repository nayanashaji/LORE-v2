import { cardData } from "./getCardDetails.js";
import { createCard } from "./createCard.js";
import { filtered } from "./filter.js";

let cards=document.querySelector(".cards");
let searchinput=document.querySelector(".search");


const cardArray=await cardData();


let searchCards=(e)=>{
    let searchvalue=e.target.value.toLowerCase();
    let filteredcards=filtered(cardArray,searchvalue);
    cards.innerHTML="";
    createCard(filteredcards,cards);
    console.log("hi");
}

let debounce=(callback,delay)=>{
    let timerid;
    return (...args)=>{
        clearTimeout(timerid);
        timerid=setTimeout(()=>callback(...args),delay);
    };
}

searchinput.addEventListener("keyup",debounce(searchCards,500));

createCard(cardArray,cards);