const fs = require("fs");
const f = fs.readFileSync("input7.txt", "utf8");
let instructions = f.split("\n");

let variables = {

}

class Instruction {
    input1 : string
    input2 : string |  null
    output: string
    operation : string
    constructor(input1 :string, input2 : string | null = null, operation : string, output : string){
        this.input1 = input1
        this.input2 = input2
        this.output = output
        this.operation = operation
    }
}


instructions = instructions.map((element: any) => {
  return element.split(" -> ");
});
instructions = instructions.map((element: any) => {
    if (element[0].split(" ").length !== 3){ // therefore a not command

        return new Instruction()
    }
});

console.log(instructions);
