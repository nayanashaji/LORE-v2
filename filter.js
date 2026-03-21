export const filtered=(cards,searchvalue)=>{
    let filteredcards=cards.filter((card)=>card.place.toLowerCase().includes(searchvalue))
    return filteredcards;
}   