
import {ethers} from "hardhat";
import {Greeter} from "../src/types/Greeter";


async function main() {
  const Greeter = await  ethers.getContractFactory("Greeter");
  const greeter:Greeter = await Greeter.deploy("Hello, Hardhat!") as Greeter;

  await greeter.deployed();
  console.log("Foo:" , await greeter.foo(34));
  console.log("Greeter deployed to:", greeter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
