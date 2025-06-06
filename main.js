var input = "turpentine and turtles";

const vowels = ['a', 'e', 'i', 'o', 'u'];

var resultArray = [];

for (let i = 0; i < input.length; i++) {
  // console.log(i);
  const letter = input[i].toLocaleLowerCase();

  if (letter === 'e' || letter === 'u') {
    resultArray.push(letter);
  }

  for (let j = 0; j < vowels.length; j++) {
    const vowel = vowels[j];

    if (letter === vowel) {
      resultArray.push(letter);
    }
  }
}

// console.log(resultArray);

let resultString = resultArray.join('').toLocaleUpperCase();

console.log(resultString);
