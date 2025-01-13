// export const contractABI = [
//     // Your ABI goes here
//     [
//         {
//             "inputs": [
//                 {
//                     "internalType": "address payable",
//                     "name": "receiver",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "amount",
//                     "type": "uint256"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "message",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "keyword",
//                     "type": "string"
//                 }
//             ],
//             "name": "addToBlockchain",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "anonymous": false,
//             "inputs": [
//                 {
//                     "indexed": false,
//                     "internalType": "address",
//                     "name": "from",
//                     "type": "address"
//                 },
//                 {
//                     "indexed": false,
//                     "internalType": "address",
//                     "name": "receiver",
//                     "type": "address"
//                 },
//                 {
//                     "indexed": false,
//                     "internalType": "uint256",
//                     "name": "amount",
//                     "type": "uint256"
//                 },
//                 {
//                     "indexed": false,
//                     "internalType": "string",
//                     "name": "message",
//                     "type": "string"
//                 },
//                 {
//                     "indexed": false,
//                     "internalType": "uint256",
//                     "name": "timestamp",
//                     "type": "uint256"
//                 },
//                 {
//                     "indexed": false,
//                     "internalType": "string",
//                     "name": "keyword",
//                     "type": "string"
//                 }
//             ],
//             "name": "Transfer",
//             "type": "event"
//         },
//         {
//             "inputs": [],
//             "name": "getAllTransactions",
//             "outputs": [
//                 {
//                     "components": [
//                         {
//                             "internalType": "address",
//                             "name": "sender",
//                             "type": "address"
//                         },
//                         {
//                             "internalType": "address",
//                             "name": "receiver",
//                             "type": "address"
//                         },
//                         {
//                             "internalType": "uint256",
//                             "name": "amount",
//                             "type": "uint256"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "message",
//                             "type": "string"
//                         },
//                         {
//                             "internalType": "uint256",
//                             "name": "timestamp",
//                             "type": "uint256"
//                         },
//                         {
//                             "internalType": "string",
//                             "name": "keyword",
//                             "type": "string"
//                         }
//                     ],
//                     "internalType": "struct Transactions.TransferStruct[]",
//                     "name": "",
//                     "type": "tuple[]"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "getTransactionCount",
//             "outputs": [
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         }
//     ]
//     // Add other ABI elements as necessary
// ];
 

export const contractABI = [
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "receiver",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "message",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "keyword",
                "type": "string"
            }
        ],
        "name": "addToBlockchain",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "message",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "keyword",
                "type": "string"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "getAllTransactions",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "sender",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "receiver",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "message",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "timestamp",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "keyword",
                        "type": "string"
                    }
                ],
                "internalType": "struct Transactions.TransferStruct[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTransactionCount",
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
];
