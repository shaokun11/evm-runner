import { ethers } from "ethers";
let coder = ethers.AbiCoder.defaultAbiCoder();
let code = coder.encode(["string", "string"], ["USDC", "USDC"]).slice(2);
console.log("--------code---", code);
