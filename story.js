import { cardData } from "./getCardDetails.js";

const cardArray=await cardData();

let story=document.querySelector(".story");
let comments=document.querySelector(".comments");

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
image.classList.add("story-img");

imageContainer.appendChild(image);

story.appendChild(imageContainer);

let contentContainer=document.createElement("div");
contentContainer.classList.add("content-container");

let title=document.createElement("h1");
title.innerText=storySelected.title;
contentContainer.appendChild(title);

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

contentContainer.appendChild(subTitle);

const storyDetail=document.createElement("p");
storyDetail.innerText=storySelected.story;
contentContainer.appendChild(storyDetail);

story.appendChild(contentContainer);

let commentArray=storySelected.comments;
for(let comment of commentArray){
    let commentBox=document.createElement("div");
    commentBox.classList.add("comment-box")

    let commentHeader=document.createElement("div");
    commentHeader.classList.add("comment-header");

    let commentAuthor=document.createElement("span");
    commentAuthor.innerText=comment.user;
    commentAuthor.classList.add("comment-author");
    commentHeader.appendChild(commentAuthor);

    let commentTime=document.createElement("span");
    commentTime.innerText=comment.time;
    commentTime.classList.add("comment-time");
    commentHeader.appendChild(commentTime);

    commentBox.appendChild(commentHeader);

    let commentText=document.createElement("p");
    commentText.innerText=comment.text;
    commentText.classList.add("comment-text");
    commentBox.appendChild(commentText);

    let commentLikes = document.createElement("span");
    commentLikes.classList.add("comment-likes");

    let commentIcon = document.createElement("i");
    commentIcon.classList.add("fa-regular", "fa-thumbs-up");

    let likeText = document.createElement("span");
    likeText.innerText = ` ${comment.likes}`;

    commentLikes.appendChild(commentIcon);
    commentLikes.appendChild(likeText);

    commentBox.appendChild(commentLikes);

    comments.appendChild(commentBox);

    commentLikes.addEventListener("click", () => {
    comment.likes++;
    likeText.innerText = ` ${comment.likes}`;
});
}