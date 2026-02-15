import { cardData } from "./getCardDetails.js";
import { createCard } from "./createCard.js";

let cards=document.querySelector(".cards");

const cardArray=await cardData();

createCard(cardArray,cards);