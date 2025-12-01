const fs = require("fs");
const f = fs.readFileSync("input5.txt", "utf8");
// const f = fs.readFileSync("test.txt", "utf8");
let words = f.split("\n");
console.log(words);

// in all these functions true indicates a nice word and a false indicates a naughty word

const containsSandwhich = (word: string) => {
  for (let i = 0; i < word.length; i++) {
    if (word[i] == word[i + 2]) return true;
  }
  return false;
};

const containsRepeatedPair = (word: string) => {
  let firstChar, secondChar: string;
  for (let i = 0; i < word.length; i++) {
    firstChar = word[i];
    secondChar = word[i + 1];
    if (word.substring(i + 2).includes(firstChar + secondChar)) return true;
  }
  return false;
};

const isNice = (word: string): boolean => {
  return containsSandwhich(word) && containsRepeatedPair(word);
};

const total = words.reduce(
  (acc: number, el: string) => acc + Number(isNice(el)),
  0
);
console.log(total);
export {};
