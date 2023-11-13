import { ethers,wallet } from "ethers";
let url =
    "https://fabled-floral-breeze.ethereum-goerli.quiknode.pro/fc44f7c168da526a93e54766750699ecdb8f954a/";

const provider = new ethers.JsonRpcProvider(url);
const pk =""
const wallet = new Wallet("")
const signer = wallet.connect(provider);
const abi = ["function claim(uint256 _summoner) external"];
const sleep = (s = 1) => new Promise((r) => setTimeout(() => r(0), s * 1000));
const contract = new Contract("0x2069B76Afe6b734Fb65D1d099E7ec64ee9CC76B2", abi, signer);
await contract.claim(996);
