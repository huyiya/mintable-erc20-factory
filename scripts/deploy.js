const hre = require('hardhat');

async function main() {
  // We get the contract to deploy
  const MintableTokenFactoryContract = await hre.ethers.getContractFactory('MintableTokenFactory');
  
  // Deploy
  const MintableTokenFactory = await MintableTokenFactoryContract.deploy();
  
  console.log('Deployed successfully');
  console.log('Contract Address:', MintableTokenFactory.address);
  console.log(`BSC: https://testnet.bscscan.com/address/${MintableTokenFactory.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });