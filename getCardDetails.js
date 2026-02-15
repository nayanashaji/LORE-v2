export async function cardData() {
    const response=await fetch("cards.json");
    const cardDetails=await response.json();
    return cardDetails;
}