'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// 1) ---------------------
// 
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Ex: "I did my waiting 12 years of it in Azkaban" ==> "Azkaban"
// Ex: "Impossible" ==> "Impossible"
//
// ------------------------

const LastWord = (str) => {
    let j = str.lastIndexOf(' ')
    if (j == -1) {
        return str
    }
    else {
        return str.slice(j + 1)

    }
}

// 2) ---------------------
// 
//  Hopefully you struggled in the last code challenge, you can try to do the same task using the split method
//
//  EX: "you dare use my spells against me, potter" ===> "potter"
//
// ------------------------

const LastWord_2 = (str) => {
    let j = str.split(' ');
    let x = j[j.length - 1];
    return x


}

// 3) ---------------------
// 
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Ex: "I thought you had a plan" ==> "We thought you had a plan"
// Ex: "I was there 3000 years ago" ==> "We were there 3000 years ago"
// Ex: "I am Venom" ==> "We are Venom"
//
// ------------------------

const replaceWords = (str) => {
    let j = [];
    let x = str.split(' ');
    if (x[0] = "I") {
        j = x.splice(0, 1, "We");
        if (x[1] == "was") {
            j = x.splice(1, 1, "were");
        }
        else if (x[1] == "am") {
            j = x.splice(1, 1, "are");
        }

    }

    return x.join(" ")


}


// 4) ---------------------
// 
// Write a function that "joins" the array of words together and put a comma "," after every five words
// ["move","it","away","from","the","street"] ==> "move it away from the, street" 
//
// ------------------------

const arrToStr = (arr) => {
    let x;
    if (arr.length != 5) {
        let x1 = arr.slice(0, 5)
        let x2 = arr.slice(5)
        x = x1.join(" ") + ", " + x2.join(" ")

    }
    else {

        x = arr.slice(0, 5).join(" ") + ","

    }
    return x
}

// 5) ---------------------
// 
// Simon got a string manipulation question for his interview, it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// "aaaa bbb sdf" ===> "a4 b3 s1d1f1"
//  "door" ==> "d1o2r1"
//
// help him by writing the function
//
// ------------------------

const letterCounter = (str) => {



    let x = [];
    x = str.split(' ')
    let y = '';
    for (let i = 0; i < x.length; i++) {     
        for (let j = 0; j < x[i].length; j++) { 
            let counter = 1;

            for (let ii = j + 1; ii < x[i].length; ii++) { 
                if (x[i][j] == x[i][ii]) {
                    counter++
                }
                else {
                    break;
                }
            }
            y += x[i][j] + counter
            j += counter -1  
        }
        if (i != x.length - 1)
            y += ' '
    }

    console.log(y)


 

    return y;
}



module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };