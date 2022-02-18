//const HDWalletProvider = require("@truffle/hdwallet-provider");
// const HDWalletProvider = require("truffle-hdwallet-provider");
const PrivateKeyProvider = require("truffle-privatekey-provider");
const HDWalletProvider = require("@truffle/hdwallet-provider");
// var privateKey = "82887986df9d5e92e22a77b04541fd6dba7ea309efd264b0200ed579fb7a4b85";
var privateKey = "29d7dcc652a635703e743dc9a21bdda839cf500ad13079030eed01a731fdecb2"; //live
module.exports = {
  networks: {
    ropsten: {
      provider: function() {
        return new PrivateKeyProvider(privateKey, "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161")
      },
      network_id: 3,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    fantom: {
      provider: function() {
        return new HDWalletProvider(privateKey, "https://rpc.testnet.fantom.network")
      },
      network_id: 4002,
      gasPrice: 300000000000
      // confirmations: 10,
      // timeoutBlocks: 200,
      // skipDryRun: true
    },
    ethereum: {
      provider: function() {
        return new HDWalletProvider(privateKey, "https://mainnet.infura.io/v3/ce70617b31124974a29c2d7c79970142")
      },
      network_id: 1,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
      gasPrice: 45000000000 //45
    },
    polygon: {
      networkCheckTimeout: 1000000,
      provider: () =>
        new HDWalletProvider(
          privateKey,
          "https://polygon-rpc.com/"
        ),
      network_id: 137,
      gasPrice: 50000000000 //50
    },
    develop: {
      accounts: 14
    }
  },
  compilers: {
    solc: {
      version: "0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
      settings: {
        optimizer: {
          enabled: true
        }
      }
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: 'R2XXX48PYNAQ3XCKFTHD9RDHSYB3JKIT64',
    bscscan: "VZCHXEMUVYEQ4QZV7D8UUJXAY881DCSMAD",
    polygonscan:"HEUBWBGGEDBJIKU38GUGFU8UNRYRN1SVT1",
    ftmscan: "MTVBN3KAA9A2QEICY9P4ETDSUSN1XCT71Z"
  },
};