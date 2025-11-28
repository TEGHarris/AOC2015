const fs = require("fs");

const f = fs.readFileSync("input2.txt", "utf8");
let dimensions = f.split("\n");
//dimensions = dimensions.split("x")
dimensions = dimensions.map((e: string) => {
  return e.split("x");
});
// console.log(dimensions);
dimensions.pop() // remove last invalid item
class Present {
  h: number;
  w: number;
  l: number;
  wrappingPaperRequired : number;
  constructor(h: number, w: number, l: number) {
    this.h = h;
    this.w = w;
    this.l = l;
    this.wrappingPaperRequired = this.getSurfaceArea() + this.findSmallest()
  }
  getSurfaceArea() {
    return 2 * this.l * this.w + 2 * this.w * this.h + 2 * this.h * this.l;
  }
  findSmallest() {
    return Math.min((this.l * this.w), (this.w * this.h),(this.h * this.l));
  }

}

let presents: Present[] = [];

for (let i of dimensions) {
    presents.push(new Present(Number(i[0]), Number(i[1]), Number(i[2])));
}
console.log(presents)
const total = presents.reduce((acc : number, current: Present) => {
    return acc += current.wrappingPaperRequired;
},0);
console.log(total)
// console.log(presents[presents.length-1])
// console.log(dimensions[dimensions.length-1])