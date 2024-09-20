function evenOrOdd(number) {
  return number % 2 === 0 ? `Even` : `Odd`;
}

// console.log(evenOrOdd(2))
// console.log(evenOrOdd(3))

function makeNegative(num) {
  return num > 0 ? -num : num;
}

// console.log(makeNegative(1)) // return -1
// console.log(makeNegative(-5)) // return -5
// console.log(makeNegative(0)) // return 0
// console.log(makeNegative(0.12)) // return -0.12

// You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
  let sum = 0;
  arr.map((num) => {
    if (num > 0) {
      sum += num;
    }
  });
  return sum;
}

// console.log(positiveSum([1,2,3,4,5])) //15;
// console.log(positiveSum([1,-2,3,4,5]),13);
// console.log(positiveSum([]),0);
// console.log(positiveSum([-1,-2,-3,-4,-5]),0);
// console.log(positiveSum([-1,2,3,4,-5]),9);

// Complete the solution so that it reverses the string passed into it.

function solution(str) {
  return str.split("").reverse().join("");
}

// console.log(solution('world'), 'dlrow');
// console.log(solution('hello'), 'olleh');
// console.log(solution(''), '');

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

// console.log(boolToWord(true), 'Yes')
// console.log(boolToWord(false), 'No')

// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

function opposite(number) {
  return -number;
}

// console.log(opposite(1), -1)
// console.log(opposite(14), -14)
// console.log(opposite(-34), 34)

// create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

function removeChar(str) {
  return str.slice(1, str.length - 1);
}

// console.log(removeChar('eloquent'), 'loquen');

// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle.

function findNeedle(haystack) {
  if (haystack.includes("needle")) {
    let spot = 0;
    haystack.map((item, index) => {
      if (item === "needle") {
        spot = index;
      }
    });
    return `found the needle at position ${spot}`;
  } else {
    return "no needle here boss";
  }
}

// console.log(findNeedle(['283497238987234', 'a dog', 'a cat', 'some random junk', 'needle', 'a piece of hay', 'something somebody lost a while ago']), 'found the needle at position 4')

let greeting = [
  ["english", "Welcome"],
  ["czech", "Vitejte"],
  ["danish", "Velkomst"],
  ["dutch", "Welkom"],
  ["estonian", "Tere tulemast"],
  ["finnish", "Tervetuloa"],
  ["flemish", "Welgekomen"],
  ["french", "Bienvenue"],
  ["german", "Willkommen"],
  ["irish", "Failte"],
  ["italian", "Benvenuto"],
  ["latvian", "Gaidits"],
  ["lithuanian", "Laukiamas"],
  ["polish", "Witamy"],
  ["spanish", "Bienvenido"],
  ["swedish", "Valkommen"],
  ["welsh", "Croeso"],
];

function greet(language) {
  let salutation = "Welcome";

  greeting.forEach((word) => {
    if (word[0] === language) {
      salutation = word[1];
    }
  });

  return salutation;
}

const greetings = (language) => {
  for (let i = 0; i < greeting.length; i++) {
    if (greeting[i][0] === language) {
      return greeting[i][1];
    }
  }
  return "Welcome";
};

//console.log(greet("english")); //'Welcome', "Your function should have returned 'Welcome'. Try again."
// console.log(greet('dutch'), 'Welkom', "Your function should have returned 'Welkom'. Try again.");
// console.log(greet('IP_ADDRESS_INVALID'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");

// Write a function that accepts an integer n and a string s as parameters,
//  and returns a string of s repeated exactly n times.

function repeatStr(n, s) {
  // let arr = [];
  // for (let i = 0; i < n; i++) {
  //   arr.push(s);
  // }

  // return arr.join("");

  // let answer = "";

  // for (let i = 0; i < n; i++) {
  //   answer = answer + s;
  // }
  // return answer;

  return s.repeat(n);
}

// console.log(repeatStr(3, "*"), "***");
// console.log(repeatStr(5, "#"), "#####");
// console.log(repeatStr(2, "ha "), "ha ha ");




// Complete the function that accepts a string parameter, and reverses each word in the string. 
// All spaces in the string should be retained.

function reverseWords(str) {
  return str.split(" ").map(word => {
    return word.split("").reverse().join("")
  }).join(" ")
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
console.log(reverseWords('apple'), 'elppa');
console.log(reverseWords('a b c d'), 'a b c d');
console.log(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');