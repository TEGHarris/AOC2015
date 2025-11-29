//const crypto = require("crypto")
import * as crypto from "crypto";
const CODEWORD = "yzbqklnj";
const baseHash = crypto.createHash("md5").update(CODEWORD);
const createHash = (input: string): Buffer => {
    const h = baseHash.copy();
    const suffix = input;
    h.update(suffix, "utf8");
    return h.digest();
};
let counter = 1;
while (true) {
  let hash = createHash(counter.toString());
  if (hash[0] == 0 && hash[1] == 0 && hash[2] === 0 ) {
    console.log(counter);
    break;
  } else {
    if (counter % 100000 === 0) console.log(`Tested ${counter}`);
    counter++;
  }
}
