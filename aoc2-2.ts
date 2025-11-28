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
  volume : number;
  ribbonRequired : number;
  constructor(h: number, w: number, l: number) {
    this.h = h;
    this.w = w;
    this.l = l;
    this.volume = this.h * this.w * this.l
    this.ribbonRequired = this.volume + this.findSmallestPerimeter()
  }
  
  findSmallestPerimeter() {
    return Math.min((2 * (this.l + this.w)), (2 * (this.h + this.w)),(2 * (this.l + this.h)));
  }

}

let presents: Present[] = [];

for (let i of dimensions) {
    presents.push(new Present(Number(i[0]), Number(i[1]), Number(i[2])));
}
console.log(presents)
const total = presents.reduce((acc : number, current: Present) => {
    return acc += current.ribbonRequired;
},0);
console.log(total)
// console.log(presents[presents.length-1])
// console.log(dimensions[dimensions.length-1])