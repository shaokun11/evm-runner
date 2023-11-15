import { ethers } from "ethers";

let abis = [
    `event SendWarpMessage(bytes32 indexed destinationChainID, address indexed destinationAddress,address indexed sender,bytes message)`,
];

let inter = new ethers.Interface(abis);
let info = inter.parseLog({
    topics: [
        "0x3e6ad4991eb8370644656486297eb0bf6a7792ef369dfd9eda2c51ec82b67b59",
        "0xb1169e6fa6d7e2999cbaeb5320bf0fb61865a68f9ffdc093c4fe993c04592709",
        "0x000000000000000000000000ab72527b0f669b18f8322437b4eb98c2dad92bf7",
        "0x000000000000000000000000ab72527b0f669b18f8322437b4eb98c2dad92bf7",
    ],
    data: "0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000040000000000000000000000008db97c7cece249c2b98bdc0226cc4c2a57bf52fc00000000000000000000000069b5c70fabf28b48ec130984cd439efb11ca634700000000000000000000000000000000000000000000000000000000000186a000000000000000000000000000000000000000000000000000000000000000e000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
});

console.log(info);
