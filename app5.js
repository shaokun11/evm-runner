import Web3 from 'web3'
// let a = Buffer.from("hello world", "utf8").toString("hex");
// console.log(a);
// console.log(Buffer.from("hello world", "utf8"));

// let b = Buffer.from("68656c6c6f20776f726c64", "hex").toString();
// console.log(b);

const web3 = new Web3("http://127.0.0.1:9650/ext/bc/2B5UeMyfj86zTbcaVeER752DjyMiqpKCGXjMEZh6cnSNh2n7tW/rpc")
// console.log(web3.eth.accounts.create())

web3.eth.getTransaction("0x2d1f5d2aff21aaea2fba8124ce5fe262956c7cc0a337a4c77c715d91d073dc55").then(console.log)


