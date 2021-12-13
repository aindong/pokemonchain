const main = async () => {
  const chainmonContractFactory = await hre.ethers.getContractFactory(
    "ChainMon"
  );
  const chainmonContract = await chainmonContractFactory.deploy(
    ["Pikachu", "Bulbasaur", "Charmander", "Squirtle"], // chainmon names
    [
      "https://img.pokemondb.net/sprites/bank/normal/pikachu.png",
      "https://img.pokemondb.net/sprites/bank/normal/bulbasaur.png",
      "https://img.pokemondb.net/sprites/bank/normal/charmander.png",
      "https://img.pokemondb.net/sprites/bank/normal/squirtle.png",
    ], // chainmon images
    [35, 45, 39, 44], // chainmon hps
    [55, 49, 52, 48], // chainmon attacks
    [40, 49, 43, 65] // chainmon defenses
  );
  await chainmonContract.deployed();
  console.log(`Chainmon contract deployed at ${chainmonContract.address}`);
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
