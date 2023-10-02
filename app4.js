import { ethers } from "ethers";
let coder = ethers.AbiCoder.defaultAbiCoder();
let code = coder.encode(["string", "string"], ["USDC", "USDC"]).slice(2);
// console.log("--------code---", code);

console.log(coder.decode(["uint"], "0x00000000000000000000000000000000000000000000001043561a8829300000"));

let multi_abi = [
    {
        constant: true,
        inputs: [],
        name: "getCurrentBlockTimestamp",
        outputs: [
            {
                name: "timestamp",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                components: [
                    {
                        name: "target",
                        type: "address",
                    },
                    {
                        name: "callData",
                        type: "bytes",
                    },
                ],
                name: "calls",
                type: "tuple[]",
            },
        ],
        name: "aggregate",
        outputs: [
            {
                name: "blockNumber",
                type: "uint256",
            },
            {
                name: "returnData",
                type: "bytes[]",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "getLastBlockHash",
        outputs: [
            {
                name: "blockHash",
                type: "bytes32",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "addr",
                type: "address",
            },
        ],
        name: "getEthBalance",
        outputs: [
            {
                name: "balance",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "getCurrentBlockDifficulty",
        outputs: [
            {
                name: "difficulty",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "getCurrentBlockGasLimit",
        outputs: [
            {
                name: "gaslimit",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "getCurrentBlockCoinbase",
        outputs: [
            {
                name: "coinbase",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "blockNumber",
                type: "uint256",
            },
        ],
        name: "getBlockHash",
        outputs: [
            {
                name: "blockHash",
                type: "bytes32",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
];

let erc20_abi = [" function balanceOf(address owner) external view returns (uint)"];

let multi = new ethers.Interface(multi_abi);
let erc20 = new ethers.Interface(erc20_abi);

console.log(
    multi.encodeFunctionData("aggregate", [
        [
            {
                callData: erc20.encodeFunctionData("balanceOf", [
                    "0xE4dbFd60e3B20E2018dC07fd88148C0D7D966aB2",
                ]),
                target: "0xeD9326aE94Bd18F1650d381FBe508a1e9b218271",
            },
        ],
    ])
);
