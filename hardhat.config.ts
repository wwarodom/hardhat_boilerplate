// require("@nomiclabs/hardhat-waffle");
import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import { HardhatUserConfig } from "hardhat/config";

import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers' 

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const mnemonic = `cement term maze reopen forward warrior erosion column script consider feed soda` 
const privatekey = '0d7d5b98cc0012072b19c2961d8ff4672f4a7b71ff7c84c451ca0df931f100ee'
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
export default {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/uONzS48TDcM7UAj2nT8esttXSDVDkSk7',
      // accounts: { mnemonic: mnemonic}
      accounts: [privatekey]
    }
  },
  typechain: {
    outDir: 'src/types',
    target: 'ethers-v5',
    alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
    externalArtifacts: ['externalArtifacts/*.json'], // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
  },
 } as HardhatUserConfig ;
