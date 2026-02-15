export let createCard=(cardData,cardContainer)=>{
    for (let cardDetail of cardData){
        const cardImgContainer=document.createElement("div");
        const cardImg=document.createElement("img");
        cardImg.setAttribute("src",cardDetail.image);
        cardImg.setAttribute("alt","img not found");
        cardImgContainer.appendChild(cardImg);
        cardContainer.appendChild(cardImgContainer);
    }
}