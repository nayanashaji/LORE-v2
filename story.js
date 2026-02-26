import { cardData } from "./getCardDetails.js";

const cardArray=await cardData();

let story=document.querySelector(".story");
const urlParams = new URLSearchParams(window.location.search);
const storyId = urlParams.get('id');

if (!storyId) {
    document.querySelector(".story").innerHTML =
        "<h1>No story selected</h1>";
}

let storySelected=cardArray.find(cardDetail => cardDetail.id === storyId);

let imageContainer=document.createElement("div");

let image=document.createElement("img");
image.setAttribute("src",`${storySelected.image}`);

imageContainer.appendChild(image);

story.appendChild(imageContainer);

let title=document.createElement("h1");
title.innerText=storySelected.title;
story.appendChild(title);

const subTitle=document.createElement("div");
subTitle.classList.add("sub-title");

const place=document.createElement("p");
place.innerText=`Place: ${storySelected.place}`;
subTitle.appendChild(place);

const category=document.createElement("p");
category.innerText=`Category: ${storySelected.category}`;
subTitle.appendChild(category);

const orgAuthor=document.createElement("p");
orgAuthor.innerText=`Original Author: ${storySelected.author}`
subTitle.appendChild(orgAuthor);

story.appendChild(subTitle);

const storyDetail=document.createElement("p");
storyDetail.innerText=storySelected.story;
story.appendChild(storyDetail);