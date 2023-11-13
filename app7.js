let url =
    "https://fabled-floral-breeze.ethereum-goerli.quiknode.pro/fc44f7c168da526a93e54766750699ecdb8f954a/";
import Web3 from "web3";
import {ethers} from "ethers";

const web3 = new Web3(new Web3.providers.HttpProvider(url));

let p = new ethers.JsonRpcProvider(url);
// p.getFeeData().then(console.log);
// p.getBlock().then(console.log)
let a = ethers.Transaction.from(
    "0xf86a8086d55698372431831e848094f0109fc8df283027b6285cc889f5aa624eac1f55843b9aca008025a009ebb6ca057a0535d6186462bc0b465b561c94a295bdb0621fc19208ab149a9ca0440ffd775ce91a833ab410777204d5341a6f9fa91216a6f3ee2c051fea6a0428"
).toJSON();
console.log(a)

// let i = 0;
// while (i < 50) {
//     i++;
//     let { privateKey, address } = ethers.Wallet.createRandom();
//     fs.appendFile("address.txt", JSON.stringify({privateKey, address}) + "\n");
// }

let wallet = ethers.Wallet.createRandom();
console.log({
    privateKey: wallet.privateKey,
    address: wallet.address,
    pubKey: wallet.publicKey,
});

