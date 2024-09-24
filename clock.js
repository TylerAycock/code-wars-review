// Your plan is to write a function to select from the sounds depending on what time it was:

//  -- When a minute is evenly divisible by three, the clock will say the word "Fizz".
//  --When a minute is evenly divisible by five, the clock will say the word "Buzz".
//  --When a minute is evenly divisible by both, the clock will say "Fizz Buzz", with two exceptions:

// 1. On the hour, instead of "Fizz Buzz", the clock door will open, and the cuckoo bird will come out and "Cuckoo" between one and      twelve times depending on the hour.

// 2. On the half hour, instead of "Fizz Buzz", the clock door will open, and the cuckoo will come out and "Cuckoo" just once.
//With minutes that are not evenly divisible by either three or five, at first you had intended to have the clock just say the numbers ala Fizz Buzz, but then you decided at least for version 1.0 to just have the clock make a quiet, subtle "tick" sound for a little more clock nature and a little less noise.

// Your input will be a string containing hour and minute values in 24-hour time, separated by a colon, and with leading zeros. For example, 1:34 pm would be "13:34".

// Your return value will be a string containing the combination of Fizz, Buzz, Cuckoo, and/or tick sounds that the clock needs to make at that time, separated by spaces. Note that although the input is in 24-hour time, cuckoo clocks' cuckoos are in 12-hour time.

function fizzBuzzCuckooClock(time) {
  let entry = {
    hour: time[0] + "" + time[1],
    minute: time[3] + "" + time[4],
  };

  let minute = +entry.minute;
  let hour = +entry.hour;

  if (minute === 0 || hour + minute === 0) {
    let announce = [];
    let adjusted = 0;
    if (hour === 0) {
      adjusted = 12;
    } else if (hour > 12) {
      adjusted = hour - 12;
    } else {
      adjusted = hour;
    }

    for (let i = 0; i < adjusted; i++) {
      announce.push("Cuckoo");
    }
    return announce.join(" ");
  } else if (minute === 30) {
    return "Cuckoo";
  } else if (minute % 3 === 0 && minute % 5 !== 0) {
    return "Fizz";
  } else if (minute % 3 !== 0 && minute % 5 === 0) {
    return "Buzz";
  } else if (minute !== 0 && minute % 3 === 0 && minute % 5 === 0) {
    return "Fizz Buzz";
  } else if (minute % 3 !== 0 && minute % 5 !== 0) {
    return "tick";
  }
}

let cleanClock = () => {
  let [hour, minute] = time.split(":");
  return minute === 0
    ? "Cuckoo".repeat(hour % 12 || 12).trim()
    : minute === 30
    ? "Cuckoo"
    : minute % 15 === 0
    ? "Fizz Buzz"
    : minute % 3 === 0
    ? "Fizz"
    : minute % 5 === 0
    ? "buzz"
    : "tick";
};

// console.log(fizzBuzzCuckooClock("13:34"), "tick");
// console.log(fizzBuzzCuckooClock("11:15"), "Fizz Buzz");
// console.log(fizzBuzzCuckooClock("21:00")); //"Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo"
console.log(fizzBuzzCuckooClock("00:00"));
