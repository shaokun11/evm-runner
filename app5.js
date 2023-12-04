import Web3 from 'web3'
// let a = Buffer.from("hello world", "utf8").toString("hex");
// console.log(a);
// console.log(Buffer.from("hello world", "utf8"));

// let b = Buffer.from("68656c6c6f20776f726c64", "hex").toString();
// console.log(b);

const web3 = new Web3("https://rpc.ankr.com/eth_goerli	")
// console.log(web3.eth.accounts.create())

web3.eth.getTransactionReceipt("0x03fccf725e0b5802a1121959ddc237ed76549fe6129a9a9b78e7cb83a4c645ac").then(console.log)


