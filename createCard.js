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
        title.classList.add("title");
        title.innerText=cardDetail.title;
        cardContainer.appendChild(title);

        const subTitle=document.createElement("div");
        subTitle.classList.add("sub-title");

        const place=document.createElement("p");
        place.innerText=`Place: ${cardDetail.place}`;
        subTitle.appendChild(place);

        const category=document.createElement("p");
        category.innerText=`Category: ${cardDetail.category}`;
        subTitle.appendChild(category);

        cardContainer.appendChild(subTitle);

        const intro=document.createElement("p");
        intro.classList.add("intro");
        intro.innerText=`${cardDetail.intro}..`;
        cardContainer.appendChild(intro);

        cardsContainer.appendChild(cardContainer);
    }
}