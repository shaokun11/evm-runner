import fs from "node:fs";

let a = Buffer.from("hello world", "utf8").toString("hex");
console.log(a);
console.log(Buffer.from("hello world", "utf8"));

let b = Buffer.from("68656c6c6f20776f726c64", "hex").toString();
console.log(b);

