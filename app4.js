import { ethers } from "ethers";
let coder = ethers.AbiCoder.defaultAbiCoder();
let gas = coder.encode(["string", "string"], ["USDC", "usdc"]).slice(2);
console.log("--------gas---", gas);
