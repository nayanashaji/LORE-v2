import { cardData } from "./getCardDetails.js";

const cardArray=await cardData();

let story=document.querySelector(".story");
const urlParams = new URLSearchParams(window.location.search);
const 
storyId = urlParams.get('id');

let storySelected=cardArray.find(cardDetail => cardDetail.id === storyId);

let imageContainer=document.createElement("div");

let image=document.createElement("img");
image.setAttribute("src",`${storySelected.image}`);

imageContainer.appendChild(image);

let title=document.createElement("h1");
title.innerText=storySelected.title;
story.appendChild(title);

story.appendChild(imageContainer);