//const crypto = require("crypto")
import * as crypto from "crypto";
const CODEWORD = "yzbqklnj";
const createHash = (input: string) => {
  const hash = crypto.createHash("md5").update(input, "utf8").digest("hex");
  return hash;
};
let counter = 1;
while (true) {
  let hash = createHash(CODEWORD + counter);
  if (hash.slice(0, 5) === "00000") {
    console.log(counter);
    break;
  } else {
    counter++;
  }
}
