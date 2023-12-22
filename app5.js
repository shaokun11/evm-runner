import Web3 from "web3";
const web3 = new Web3(new Web3.providers.HttpProvider("https://mevm.devnet.m1.movementlabs.xyz/v1"));
const res = await web3.eth.getTransactionReceipt(
    "0x43465b887a3f4655f80b1b241ce08164f77a29ea704b6bcfd5004031c1982ff9"
);
console.log(res);
