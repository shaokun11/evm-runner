let a = {
    chain_info: {
        "0x0c4f3acc88ff161700ed006433d7f2d07b26a33e": "17282021791996888582",
        "0x26834a332f85b2070b217809a5899caf69998cca": "17285046145810488038",
        "0x3681cce8e246f4f510cbab32d236457102a7dc8d": "24386461631368808448",
        "0x3c5bae74ecaba2490e23c2c4b65169457c897aa0": "14489105889231772879",
        "0x73d718665f066abb3379666856cdb1c9f6b0a8bd": "576775955960034826",
        "0xb6ee91f3bea71ab6b5c3a841cd07f0faf08e16a4": "633674132373219248",
        "0xc03c12101ae20b8e763526d6841ece893248a069": "100964552085440961427",
        "0xdbc08c0d7bb3626c48882025bbe6ae6d0b4121a7": "465964432721732893",
        "0xf16b95b7443069121617e1d01cff9b8879bb6279": "23916397935096093659",
    },
    stake_info: [
        {
            from: "stake",
            user: "0x73d718665f066abb3379666856cdb1c9f6b0a8bd",
            amount: "576775955960034826",
            stakeAmount: "100123000000000000000",
        },
        {
            from: "stake",
            user: "0xb6ee91f3bea71ab6b5c3a841cd07f0faf08e16a4",
            amount: "633674132373219248",
            stakeAmount: "110000000000000000000",
        },
        {
            from: "stake",
            user: "0xc03c12101ae20b8e763526d6841ece893248a069",
            amount: "15919622407394467199",
            stakeAmount: "2763500000000000000000",
        },
        {
            from: "stake",
            user: "0x0c4f3acc88ff161700ed006433d7f2d07b26a33e",
            amount: "17282021791996888582",
            stakeAmount: "3000000000000000000000",
        },
        {
            from: "stake",
            user: "0x26834a332f85b2070b217809a5899caf69998cca",
            amount: "17285046145810488038",
            stakeAmount: "3000525000000000000000",
        },
        {
            from: "stake",
            user: "0xf16b95b7443069121617e1d01cff9b8879bb6279",
            amount: "23916397935096093659",
            stakeAmount: "4151666666600000000000",
        },
        {
            from: "stake",
            user: "0x3681cce8e246f4f510cbab32d236457102a7dc8d",
            amount: "24386461631368808448",
            stakeAmount: "4233265400000000000000",
        },
    ],
    transfer_info: [
        {
            from: "distribute",
            user: "0xdbc08c0d7bb3626c48882025bbe6ae6d0b4121a7",
            amount: "465964432721732893",
            distributeAmount: 1525,
        },
        {
            from: "distribute",
            user: "0x3c5bae74ecaba2490e23c2c4b65169457c897aa0",
            amount: "14489105889231772879",
            distributeAmount: 47419.684700000005,
        },
        {
            from: "distribute",
            user: "0xc03c12101ae20b8e763526d6841ece893248a069",
            amount: "85044929678046494228",
            distributeAmount: 278333.513572,
        },
    ],
    staking_reward: "100000000000000000000",
    transfer_reward: "100000000000000000000",
};
const sum = (numbers) => numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let x = sum(a.stake_info.map((it) => +it.amount));
let y = sum(a.transfer_info.map((it) => +it.amount));
console.log(x, y);


// server {
//     listen 80 default_server;
//     listen [::]:80 default_server;
//     server_name graph.multiple.fi;
//     location ^~ /.well-known/acme-challenge {
//        default_type "text/plain";
//        rewrite /.well-known/acme-challenge/(.*) /$1 break;
//        root     /data;
//     }

//     location = /.well-known/acme-challenge/ {
//       return 404;
//     }

//     location / {
//            proxy_pass http://localhost:8000;
//            proxy_set_header Upgrade $http_upgrade;
//            proxy_set_header X-Forwarded-For $remote_addr;
//            proxy_set_header X-Real-IP $remote_addr;
//            proxy_set_header Host $host:$server_port;
//            proxy_cache_bypass $http_upgrade;
//        }
//   }