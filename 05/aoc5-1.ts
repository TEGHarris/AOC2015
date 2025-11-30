const fs = require("fs");
const f = fs.readFileSync("input5.txt", "utf8");
// const f = fs.readFileSync("test.txt", "utf8");
let words = f.split("\n");
console.log(words);

// in all these functions true indicates a nice word and a false indicates a naughty word
const constainsThreeVowels = (word: string) => {
  const vowels: string[] = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  for (let i of word) {
    if (vowels.includes(i)) vowelCount++;
  }
  if (vowelCount < 3) {
    console.log(
      `${word} is invalid because it contains less than 3 vowels (${vowelCount})`
    );
    return false;
  }
  return true;
};

const containsForbiddenStrings = (word: string) => {
  const forbiddenStrings = ["ab", "cd", "pq", "xy"];
  for (const e of forbiddenStrings) {
    if (word.includes(e)) {
      console.log(
        `${word} is invalid because it contains the forbidden string ${e}`
      );
      return false;
    }
  }
  return true;
};

const containsDouble = (word: string) => {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i + 1]) return true;
  }
  console.log(`${word} is invalid because it contains no double letters`);
  return false;
};

const isNice = (word: string): boolean => {
  return (
    constainsThreeVowels(word) &&
    containsForbiddenStrings(word) &&
    containsDouble(word)
  );
};

const total = words.reduce(
  (acc: number, el: string) => acc + Number(isNice(el)),
  0
);
console.log(total);
export {};
