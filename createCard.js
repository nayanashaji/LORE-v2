export let createCard=(cardData,cardsContainer)=>{
    for (let cardDetail of cardData){
        const cardContainer=document.createElement("div");
        cardContainer.classList.add("card-container");
        
        const cardImgContainer=document.createElement("div");
        const cardImg=document.createElement("img");
        cardImg.classList.add("card-img");
        cardImg.setAttribute("src",cardDetail.image);
        cardImg.setAttribute("alt",cardDetail.title);
        cardImgContainer.appendChild(cardImg);
        cardContainer.appendChild(cardImgContainer);

        const title=document.createElement("h1");
        title.innerText=cardDetail.title;
        cardContainer.appendChild(title);

        cardsContainer.appendChild(cardContainer);
    }
}