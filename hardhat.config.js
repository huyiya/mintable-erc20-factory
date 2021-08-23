require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();

const {
  NETWORKS_RPC_URL,
  CHAIN_ID,
  BSC_TESTNET_PRIVATE_KEY,
  ETHERSCAN_KEY
} = process.env;

const GAS_PRICE = 20000000000;
const SOLIDITY_VERSION = "0.6.12";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: 'bsctestnet',
  networks: {
    bsctestnet: {
      url: NETWORKS_RPC_URL,
      chainId: Number(CHAIN_ID),
      gasPrice: GAS_PRICE,
      accounts: [BSC_TESTNET_PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_KEY
  },
  solidity: {
    compilers: [
      {
        version: SOLIDITY_VERSION,
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000
          }
        }
      }
    ]
  } 
};
