import { statSync } from "fs";

const fs = require("fs");
const f = fs.readFileSync("input3.txt", "utf8");
//const f = fs.readFileSync("test.txt","utf8")
class Coordinate {
  x: number;
  y: number;
  constructor(x: any, y: any) {
    this.x = x;
    this.y = y;
  }
}
let SantaLocation = new Coordinate(0, 0);
let houses: Set<string> = new Set<string>(["0,0"]);
let directions = f.split("");
console.log(directions);
directions.forEach((element: string) => {
  switch (element) {
    case "^":
      SantaLocation.y += 1;
      break;
    case "v":
      SantaLocation.y -= 1;
      break;
    case "<":
      SantaLocation.x -= 1;
      break;
    case ">":
      SantaLocation.x += 1;
      break;
  }
  console.log(`Santa is at ${SantaLocation.x} , ${SantaLocation.y}`);
  houses.add(`${SantaLocation.x},${SantaLocation.y}`);
});
console.log(houses);
console.log(houses.size);
