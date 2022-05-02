// Code your solutions in this file
for(let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);
//accepts that accepts two arguments: an array of string names, and an event name. Create a for loop with a counter that starts at 0 and increments at the end of each loop. The for loop should stop once it has iterated over the length of the array. 
const writeCards = (arr, eventName)=> {
    return arr.map((name)=> `Thank you, ${name}, for the wonderful ${eventName} gift!`)
}