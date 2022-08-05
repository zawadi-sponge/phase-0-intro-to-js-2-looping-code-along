// Code your solutions in this file
/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
  }


  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);
*/

const writeCards = (array = ["Aki", "Ollie", "Guadalupe"]) => {
    const messageArray = [];
    for(const a of array) {
        messageArray.push(`Thank you, ${a}, for the wonderful surprise gift!`);
    }
    return messageArray;
}

const countDown = (num = 10) => {
    for(let number = num; number >= 0; number--){
        console.log(number)
    }
}