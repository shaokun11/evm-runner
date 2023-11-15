import { Web3 } from "web3";

let url = "wss://ethereum.publicnode.com";
const wsProvider = new Web3.providers.WebsocketProvider(url);
const web3 = new Web3(wsProvider);
const subscription = await web3.eth.subscribe("logs", {
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
});

subscription.on("data", async (data) => {
    console.log("New block header: ", data);
});
