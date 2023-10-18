// 直接从storage中读取

let url = "https://eth-sepolia.public.blastapi.io";
import Web3 from "web3";
const web3 = new Web3(new Web3.providers.HttpProvider(url));
web3.eth.getBlock(10000).then(console.log)

web3.eth.getTransactionReceipt("0x3a95507cf1327e0818e2e01a9b88d71467e72d5b3f381bae5ff5cb95fbc84493").then(res=>{
    console.log(res.logs)
})

let addr = "0xE4beD49Fe64Ca88b990F2C51328f09291F7F50eb";
const slot = 0;
const paddedAddress = web3.utils.leftPad(addr, 64);
const paddedSlot = web3.utils.padLeft(slot, 64);
let index = web3.utils.soliditySha3(paddedAddress, paddedSlot);
//  mapping(address account => uint256) private _balances;
let res = await web3.eth.getStorageAt("0x228C9731e289937FBD1B5bE7897522f2ecEb7630", index);
console.log(res);

let paddedAcc = web3.utils.padLeft(addr, 64);
let paddedSender = web3.utils.padLeft("0x228C9731e289937FBD1B5bE7897522f2ecEb7630", 64);
let indexAllowance = web3.utils.soliditySha3(paddedSender, web3.utils.soliditySha3(paddedAcc, 1));

//  mapping(address account => mapping(address spender => uint256)) private _allowances;
res = await web3.eth.getStorageAt("0x228C9731e289937FBD1B5bE7897522f2ecEb7630", indexAllowance);
console.log(res);

//  uint256 private _totalSupply;
res = await web3.eth.getStorageAt("0x228C9731e289937FBD1B5bE7897522f2ecEb7630", 2);
console.log(res);

//  string private _name;
res = await web3.eth.getStorageAt("0x228C9731e289937FBD1B5bE7897522f2ecEb7630", 3);
console.log(res);

//  string private _symbol;
res = await web3.eth.getStorageAt("0x228C9731e289937FBD1B5bE7897522f2ecEb7630", 4);
console.log(res);


