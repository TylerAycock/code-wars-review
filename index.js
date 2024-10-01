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
  return str
    .split(" ")
    .map((word) => {
      return word.split("").reverse().join("");
    })
    .join(" ");
}

// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
// console.log(reverseWords('apple'), 'elppa');
// console.log(reverseWords('a b c d'), 'a b c d');
// console.log(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
  if (cc.length < 4) {
    return cc;
  } else {
    let mask = cc.slice(0, cc.length - 4);
    return mask
      .split("")
      .map((num) => {
        return (num = "#");
      })
      .join("")
      .concat(cc.slice(cc.length - 4));
  }
}

// console.log(maskify("4556364607935616"), "############5616");
// console.log(maskify("1"), "1");
// console.log(maskify("11111"), "#1111");

// Given two integers a and b, which can be positive or negative,
// find the sum of all the integers between and including them and return it.
// If the two numbers are equal return a or b.

const getSum = (a, b) => {
  let arr = [];
  let small = Math.min(a, b);
  let large = Math.max(a, b);
  for (let i = small; i <= large; i++) {
    arr.push(i);
  }
  return arr.reduce((acc, cur) => {
    return acc + cur;
  });
};

// console.log(getSum(0, -1), -1);
// console.log(getSum(0, 1), 1);
// console.log(getSum(2, 2), 2);

// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime'

function divisors(integer) {
  let arr = [];

  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      arr.push(i);
    }
  }

  return arr.length ? arr : `${integer} is prime`;
}

// console.log(divisors(15), [3, 5]);
// console.log(divisors(12), [2, 3, 4, 6]);
// console.log(divisors(13), "13 is prime");

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

var number = function (array) {
  return array.map((item, index) => {
    return `${index + 1}: ${item}`;
  });
};

// console.log(number([]), [], 'Empty array should return empty array');
// console.log(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers');

function openOrSenior(data) {
  return data.map(([age, handicap]) =>
    age > 54 && handicap > 7 ? "Senior" : "Open"
  );
}

// console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior'])
// console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]),['Open', 'Open', 'Open', 'Open'])
// console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]),['Senior', 'Open', 'Open', 'Open'])

// Given an array of integers, remove the smallest value. Do not mutate the original array/list.
// If there are multiple elements with the same value, remove the one with the lowest index.
// If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
  let index = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, index), ...numbers.slice(index + 1)];
}

// console.log(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1]);

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  str.split("").forEach((letter) => {
    vowels.includes(letter) && count++;
  });

  return count;
}

// console.log(getCount("abracadabra"), 5);

// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return true if you're better, else false!

function betterThanAverage(classPoints, yourPoints) {
  let totalScores = classPoints.reduce((acc, cur) => acc + cur) + yourPoints;
  let average = totalScores / (classPoints.length + 1);
  return yourPoints > average;
}

// console.log(betterThanAverage([2, 3], 5), true);
// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);

// Your task is to write a function that takes a string and return a new string with all vowels removed.

function disemvowel(str) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  return str
    .split("")
    .filter((word) => !vowels.includes(word))
    .join("");
}

// console.log(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
// console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
// console.log(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")

// Given a non-empty array of integers, return the result of multiplying the values together in order.
// Example: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x) {
  return x.reduce((acc, cur) => acc * cur);
}

// console.log(grow([1, 2, 3]), 6);
// console.log(grow([4, 1, 1, 1, 4]), 16);
// console.log(grow([2, 2, 2, 2, 2, 2]), 64);

// Make a function that can take any non-negative integer as an argument
// and return it with its digits in descending order. Essentially,
// rearrange the digits to create the highest possible number.

function descendingOrder(n) {
  return +n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
}

// console.log(descendingOrder(15), 51);

// Create a function to  square every digit of a number and concatenate them
// The function accepts an integer and returns an integer.

function squareDigits(num) {
  return +String(num)
    .split("")
    .map((num) => +num * +num)
    .join("");
}

// console.log(squareDigits(3212), 9414);

// given a string of space separated numbers, create a function that returns the highest and lowest number

function highAndLow(numbers) {
  let arr = numbers
    .split(" ")
    .map((num) => +num)
    .sort((a, b) => b - a);

  return `${arr[0]} ${arr[arr.length - 1]}`;
}

// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");

// Create a function that checks to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
  let total = 0;
  str
    .toLowerCase()
    .split("")
    .forEach((letter) => {
      letter == "x" && total++;
      letter == "o" && total--;
    });
  return total == 0;
}

// console.log(XO("xo"), true);
// console.log(XO("xxOo"), true);
// console.log(XO("xxxm"), false);

// Create a function that when given a word returns the middle character of the word.
// If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
  let arr = s.split("");
  if (arr.length % 2 == 0) {
    return arr.slice(arr.length / 2 - 1, arr.length / 2 + 1).join("");
  } else {
    return arr.slice(arr.length / 2, arr.length / 2 + 1).join("");
  }
}

// console.log(getMiddle("test"), "es");
// console.log(getMiddle("testing"), "t");
// console.log(getMiddle("middle"), "dd");

//creating a callback function examples

// example one

function outerFn(callback) {
  console.log(callback());
}

outerFn(() => "Fancy pants string");

// example two

const createAdder = (x) => {
  return (y) => {
    return x + y;
  };
};

let addFive = createAdder(5);
let addTen = createAdder(10);

// console.log(addFive(12))

// end examples

// Create a function that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending) {
  return str.slice(str.length - ending.length) == ending;
}

// console.log(solution("abcde", "cde"), true);
// console.log(solution("abcde", "abc"), false);

// Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(arr) {
  let update = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] == +arr[i] && update.push(arr[i]);
  }

  return update;
}

// console.log(filter_list([1, 2, "a", "b"]), [1, 2], 'For input [1,2,"a","b"]');
// console.log(filter_list([1, "a", "b", 0, 15]),[1, 0, 15],'For input [1,"a","b",0,15]'
// );
// console.log( filter_list([1, 2, "aasf", "1", "123", 123]),[1, 2, 123],'For input [1,2,"aasf","1","123",123]'
// );

// Create a function that converts a strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them (capitalizing every word).

toJadenCase = function (str) {
  return str
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
};

// console.log(
//   toJadenCase("How can mirrors be real if our eyes aren't real"),
//   "How Can Mirrors Be Real If Our Eyes Aren't Real"
// );

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0.
// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(n) {
  let sum = 0;

  for (let i = 1; i < n; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(solution(10), 23);
