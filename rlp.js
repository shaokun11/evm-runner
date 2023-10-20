import { RLP } from "@ethereumjs/rlp";
import { ethers, keccak256 } from "ethers";

console.log(
    ethers.getCreateAddress({
        from: "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
        nonce: 10000,
    })
);
