// const gifts = ['teddy bear', 'drone', 'doll']

// function wrapGifts(gift){
//     console.log(`Wrapped ${gift} and added a bow!`)
// }

// wrapGifts(gifts[0])

// for (let age = 30; age < 40; age++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`)
// }

// const gifts = ['teddy bear', 'drone', 'doll']

// function wrapGifts(gifts){
//     for (let i = 0; i < gifts.length; i++){
//         console.log(`Wrapped ${gifts[i]} and added a bow!`){
//     return gifts;
//         }
//     }
// }

// wrapGifts(gifts)




function writeCards(input, event){
    let messages = new Array();
    for (let i = 0; i<input.length;i++){
        messages.push(`Thank you, ${input[i]}, for the wonderful ${event} gift!`)
    }
    return messages;
}

function countDown(i){
    while(i>=0){
        console.log(i--)
    }
}