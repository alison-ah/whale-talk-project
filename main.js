var input = "turpentine and turtles";

const vowels = ['a', 'e', 'i', 'o', 'u'];

var resultArray = [];

for (let i = 0; i < input.length; i++) {
  // console.log(i);
  for (let j = 0; j < vowels.length; j++) {
    // console.log(j);
    if (input[i] === vowels[j]) {
      // console.log(input[i]);
    }
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
    if (input[i] === 'e') {
      resultArray.push('e');
    }
    if (input[i] === 'u') {
      resultArray.push('u');
    }
  }
}

// console.log(resultArray);

let resultString = resultArray.join('').toLocaleUpperCase();

console.log(resultString);
