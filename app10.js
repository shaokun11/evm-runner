import {Provider, Wallet} from "zksync2-js";

const PRIVATE_KEY = "0x47c0dbab2ead16e3a317a33c9a86758598881e5b2f377eb1e7a00adccd8b8dad";

const zkSyncProvider = new Provider("https://powerful-solitary-sanctuary.zksync-testnet.quiknode.pro/e733fa88e4cec3dc53951c0c22b12415840c4949");
const ethereumProvider = new Provider(
    "https://fabled-floral-breeze.ethereum-goerli.quiknode.pro/fc44f7c168da526a93e54766750699ecdb8f954a"
);

const wallet = new Wallet(PRIVATE_KEY, zkSyncProvider, ethereumProvider);
// 0x480a08ca9c51a7bf976f6646fafc2a7076f2cc9e7dba33ff6bbd8a346adb1078
// wallet
//     .deposit({
//         token: "0x871d0b71358d647D104B3DF737bb53c294CC3179",
//         amount: 1,
//         // gasPerPubdataByte: 5,
//         // approveERC20: true,
//         l2GasLimit:300000
//     })
//     .then(console.log);

const FAILED_DEPOSIT_HASH = "0xbea07e1a7bd8ab5efb9676d4ad034e93413ebdf5b9c0f2f5279f1cceff18728d";
// const FAILED_DEPOSIT_HASH = "0x96185c33c4a10096a6b41018056e2b4431225a87ea1482ed732711c099df8bf0";
wallet
    .claimFailedDeposit(
        FAILED_DEPOSIT_HASH
    )
    .then(console.log);
