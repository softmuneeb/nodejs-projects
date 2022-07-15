// got 0xabcd = Got from web3.getEvents('Transfer')

a = {
  address: '0xe52D18503d87E481E07520Dc23a018126a87b0c2',
  blockHash: '0x50df7b98817cf0cd9d5ade353fbea29eb551c2fd4e1817801e4215c92162c95a',
  blockNumber: 15097260,
  logIndex: 127,
  removed: false,
  transactionHash: '0x17dc3d73367d2da55cb1394f40886e4e7d9da82f3051a84c01d2f2f3647ba18d',
  transactionIndex: 97,
  id: 'log_12638009',
  returnValues: {
    0: '0x2EDDF2EA9aCB435D0080CFE66DeE410fddA1f693',
    1: '0x838443a8C58F1379bD8A83AC521844EEF58bE464',
    2: '1301',
    from: '0x2EDDF2EA9aCB435D0080CFE66DeE410fddA1f693',
    to: '0x838443a8C58F1379bD8A83AC521844EEF58bE464',
    tokenId: '1301',
  },
  event: 'Transfer',
  signature: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
  raw: {
    data: '0x',
    topics: [
      '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
      '0x0000000000000000000000002eddf2ea9acb435d0080cfe66dee410fdda1f693',
      '0x000000000000000000000000838443a8c58f1379bd8a83ac521844eef58be464',
      '0x0000000000000000000000000000000000000000000000000000000000000515',
    ],
  },
};

// Got from web3.getTransactionReceipt("0xabcd")
b = {
  blockHash: '0x50df7b98817cf0cd9d5ade353fbea29eb551c2fd4e1817801e4215c92162c95a',
  blockNumber: 15097260,
  contractAddress: null,
  cumulativeGasUsed: 7151426,
  effectiveGasPrice: 75757812372,
  from: '0x838443a8c58f1379bd8a83ac521844eef58be464',
  gasUsed: 181595,
  logs: [
    {
      address: '0x00000000006c3852cbEf3e08E8dF289169EdE581',
      blockHash: '0x50df7b98817cf0cd9d5ade353fbea29eb551c2fd4e1817801e4215c92162c95a',
      blockNumber: 15097260,
      data: '0x45e1adaf3d07ac1d84cc4adb56514e97ea77c5387fca4c148c969da322393da4000000000000000000000000838443a8c58f1379bd8a83ac521844eef58be4640000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002000000000000000000000000e52d18503d87e481e07520dc23a018126a87b0c2000000000000000000000000000000000000000000000000000000000000051500000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000018fae27693b40000000000000000000000000002eddf2ea9acb435d0080cfe66dee410fdda1f693000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000b1a2bc2ec50000000000000000000000000008de9c5a032463c561423387a9648c5c7bcc5bc9000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000214e8348c4f00000000000000000000000000020a824e1d23ca2a5ad028752bc1cc64b4b1a8e27',
      logIndex: 125,
      removed: false,
      topics: [
        '0x9d9af8e38d66c62e2c12f0225249fd9d721c54b83f48d9352c97c6cacdcb6f31',
        '0x0000000000000000000000002eddf2ea9acb435d0080cfe66dee410fdda1f693',
        '0x000000000000000000000000004c00500000ad104d7dbd00e3ae0a5c00560c00',
      ],
      transactionHash: '0x17dc3d73367d2da55cb1394f40886e4e7d9da82f3051a84c01d2f2f3647ba18d',
      transactionIndex: 97,
      id: 'log_60641c9f',
    },
    {
      address: '0xe52D18503d87E481E07520Dc23a018126a87b0c2',
      blockHash: '0x50df7b98817cf0cd9d5ade353fbea29eb551c2fd4e1817801e4215c92162c95a',
      blockNumber: 15097260,
      data: '0x',
      logIndex: 126,
      removed: false,
      topics: [
        '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
        '0x0000000000000000000000002eddf2ea9acb435d0080cfe66dee410fdda1f693',
        '0x0000000000000000000000000000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000000000000000000000000515',
      ],
      transactionHash: '0x17dc3d73367d2da55cb1394f40886e4e7d9da82f3051a84c01d2f2f3647ba18d',
      transactionIndex: 97,
      id: 'log_d133f60c',
    },
    {
      address: '0xe52D18503d87E481E07520Dc23a018126a87b0c2',
      blockHash: '0x50df7b98817cf0cd9d5ade353fbea29eb551c2fd4e1817801e4215c92162c95a',
      blockNumber: 15097260,
      data: '0x',
      logIndex: 127,
      removed: false,
      topics: [
        '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
        '0x0000000000000000000000002eddf2ea9acb435d0080cfe66dee410fdda1f693',
        '0x000000000000000000000000838443a8c58f1379bd8a83ac521844eef58be464',
        '0x0000000000000000000000000000000000000000000000000000000000000515',
      ],
      transactionHash: '0x17dc3d73367d2da55cb1394f40886e4e7d9da82f3051a84c01d2f2f3647ba18d',
      transactionIndex: 97,
      id: 'log_12638009',
    },
  ],
  logsBloom:
    '0x000000000000000000000000000000200000000041000000000000000000000000000000000000000200000000000000000000000000000000000000002000000000000200000000020000080000000000000000000000000002000000000000000000000202000000000000000008000400000000000000000000100000000000000000000200010000000000800002000000000000000100000000000000008a0000000000000000000000000000000000000000000002000000000000000000000002000000000000000000000000000000400000000000000800000020000010000000000000000000000000000000000000040800000000000000000000',
  status: true,
  to: '0x00000000006c3852cbef3e08e8df289169ede581',
  transactionHash: '0x17dc3d73367d2da55cb1394f40886e4e7d9da82f3051a84c01d2f2f3647ba18d',
  transactionIndex: 97,
  type: '0x2',
};

// Got from web3.getTransaction("0xabcd")
c = {
  accessList: [],
  blockHash: '0x50df7b98817cf0cd9d5ade353fbea29eb551c2fd4e1817801e4215c92162c95a',
  blockNumber: 15097260,
  chainId: '0x1',
  from: '0x838443a8C58F1379bD8A83AC521844EEF58bE464',
  gas: 186566,
  gasPrice: '75757812372',
  hash: '0x17dc3d73367d2da55cb1394f40886e4e7d9da82f3051a84c01d2f2f3647ba18d',
  input:
    '0xfb0f3ee1000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000018fae27693b40000000000000000000000000002eddf2ea9acb435d0080cfe66dee410fdda1f693000000000000000000000000004c00500000ad104d7dbd00e3ae0a5c00560c00000000000000000000000000e52d18503d87e481e07520dc23a018126a87b0c20000000000000000000000000000000000000000000000000000000000000515000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000062c610f50000000000000000000000000000000000000000000000000000000062eeef750000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014afa1c8300fd3b0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f00000000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f00000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000024000000000000000000000000000000000000000000000000000000000000002e00000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000b1a2bc2ec50000000000000000000000000008de9c5a032463c561423387a9648c5c7bcc5bc9000000000000000000000000000000000000000000000000000214e8348c4f00000000000000000000000000020a824e1d23ca2a5ad028752bc1cc64b4b1a8e27000000000000000000000000000000000000000000000000000000000000004185ae2337e8b11625b4403f52ed2a8261010f8b427ab225083ff8618e5a5ee0af56dfce84d8da27e78600c21c664807ae86b4f0ae140eeecb7c5a2c95e30193e31b00000000000000000000000000000000000000000000000000000000000000',
  maxFeePerGas: '144137810928',
  maxPriorityFeePerGas: '2500000000',
  nonce: 74,
  r: '0xcded3f09707c4d765d0ccbd869d50643e1419b6e236dee293541567054519d66',
  s: '0x1abf30c98b28b8b584ec5dac6ad172d396af8ad55d5cc0d69b6daccdfa25fe9a',
  to: '0x00000000006c3852cbEf3e08E8dF289169EdE581',
  transactionIndex: 97,
  type: 2,
  v: '0x1',
  value: '125000000000000000',
};
