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

        const subTitle=document.createElement("div");

        const place=document.createElement("p");
        place.innerText=`Place: ${cardDetail.place}`;
        subTitle.appendChild(place);

        const author=document.createElement("p");
        author.innerText=`Author: ${cardDetail.author}`;
        subTitle.appendChild(author);

        cardContainer.appendChild(subTitle);

        const category=document.createElement("p");
        category.innerText=`Category: ${cardDetail.category}`;
        cardContainer.appendChild(category);

        const intro=document.createElement("p");
        intro.innerText=`${cardDetail.intro}...`;
        cardContainer.appendChild(intro);

        cardsContainer.appendChild(cardContainer);
    }
}