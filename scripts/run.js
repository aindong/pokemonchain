const main = async () => {
  const gameManagerContractFactory = await hre.ethers.getContractFactory(
    "GameManager"
  );
  const gameContract = await gameManagerContractFactory.deploy();
  await gameContract.deployed();

  console.log("Game deployed at:", gameContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

runMain();
