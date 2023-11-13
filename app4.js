import {ethers} from "ethers";

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





let abi3 = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "Record",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "all",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes",
				"name": "b",
				"type": "bytes"
			}
		],
		"name": "decode",
		"outputs": [
			{
				"components": [
					{
						"internalType": "bytes32",
						"name": "sourceChainID",
						"type": "bytes32"
					},
					{
						"internalType": "address",
						"name": "originSenderAddress",
						"type": "address"
					},
					{
						"internalType": "bytes32",
						"name": "DestinationChainID",
						"type": "bytes32"
					},
					{
						"internalType": "address",
						"name": "DestinationAddress",
						"type": "address"
					},
					{
						"internalType": "bytes",
						"name": "payload",
						"type": "bytes"
					}
				],
				"internalType": "struct AddressRecord.WarpMessage",
				"name": "warpMessage",
				"type": "tuple"
			},
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes",
				"name": "b",
				"type": "bytes"
			}
		],
		"name": "decode2",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "messageID",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "senderAddress",
						"type": "address"
					},
					{
						"internalType": "bytes32",
						"name": "destinationChainID",
						"type": "bytes32"
					},
					{
						"internalType": "address",
						"name": "destinationAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "requiredGasLimit",
						"type": "uint256"
					},
					{
						"internalType": "address[]",
						"name": "allowedRelayerAddresses",
						"type": "address[]"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "receivedMessageID",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "relayerRewardAddress",
								"type": "address"
							}
						],
						"internalType": "struct AddressRecord.TeleporterMessageReceipt[]",
						"name": "receipts",
						"type": "tuple[]"
					},
					{
						"internalType": "bytes",
						"name": "message",
						"type": "bytes"
					}
				],
				"internalType": "struct AddressRecord.TeleporterMessage",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "messageID",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "senderAddress",
						"type": "address"
					},
					{
						"internalType": "bytes32",
						"name": "destinationChainID",
						"type": "bytes32"
					},
					{
						"internalType": "address",
						"name": "destinationAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "requiredGasLimit",
						"type": "uint256"
					},
					{
						"internalType": "address[]",
						"name": "allowedRelayerAddresses",
						"type": "address[]"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "receivedMessageID",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "relayerRewardAddress",
								"type": "address"
							}
						],
						"internalType": "struct AddressRecord.TeleporterMessageReceipt[]",
						"name": "receipts",
						"type": "tuple[]"
					},
					{
						"internalType": "bytes",
						"name": "message",
						"type": "bytes"
					}
				],
				"internalType": "struct AddressRecord.TeleporterMessage",
				"name": "b",
				"type": "tuple"
			}
		],
		"name": "encode3",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "hash",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "isRecord",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint32",
				"name": "messageIndex",
				"type": "uint32"
			},
			{
				"internalType": "address",
				"name": "relayerRewardAddress",
				"type": "address"
			}
		],
		"name": "receiveCrossChainMessage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "signature",
				"type": "bytes"
			}
		],
		"name": "record",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "total",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]


