const fs = require("fs");
const f = fs.readFileSync("input3.txt", "utf8");
// const f = fs.readFileSync("test.txt","utf8")
class Coordinate {
  x: number;
  y: number;
  constructor(x: any, y: any) {
    this.x = x;
    this.y = y;
  }
}
let SantaLocation = new Coordinate(0, 0);
let RoboLocation = new Coordinate(0, 0);
let isSanta = true;
let houses: Set<string> = new Set<string>(["0,0"]);
let directions = f.split("");
console.log(directions);
let activePerson: Coordinate;
directions.forEach((element: string) => {
  activePerson = isSanta ? SantaLocation : RoboLocation;
  const actorName = isSanta ? "Santa" : "Robo";

  switch (element) {
    case "^":
      activePerson.y += 1;
      break;
    case "v":
      activePerson.y -= 1;
      break;
    case "<":
      activePerson.x -= 1;
      break;
    case ">":
      activePerson.x += 1;
      break;
  }

  console.log(`${actorName} is at ${activePerson.x} , ${activePerson.y}`);
  isSanta = !isSanta;

  houses.add(`${activePerson.x},${activePerson.y}`);
});
console.log(houses);
console.log(houses.size);
export{};