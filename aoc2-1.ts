const fs = require("fs")

const f = fs.readFileSync("input2.txt","utf8")
let dimensions = f.split("\n")
//dimensions = dimensions.split("x")
dimensions = dimensions.map((e: string) => {
    return e.split("x")
})
console.log(dimensions)


class Present{
    h;
    w;
    l;
    constructor(h: number, w:number, l:number)
}

let presents : Present[];
for (let i of dimensions) {

}