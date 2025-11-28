const fs = require("fs");

const f = fs.readFileSync("input1.txt", "utf8");
let floor: number = 0;
let pointer: number = 0;
for (let char of f) {
  pointer += 1;
  floor += char === "(" ? 1 : -1;
  if (floor == -1) {
    console.log(pointer);
    break;
  }
}
export {};
