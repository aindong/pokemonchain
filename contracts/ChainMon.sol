// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract ChainMon {
    // character attribute
    struct ChainMonAttributes {
        uint256 characterIndex;
        string name;
        string imageURI;
        uint256 hp;
        uint256 maxHp;
        uint256 attack;
        uint256 defense;
    }

    // Array to hold the default data for the chainmons
    ChainMonAttributes[] defaultChainMons;

    constructor(
        string[] memory characterNames,
        string[] memory characterImages,
        uint256[] memory characterHPs,
        uint256[] memory characterAttacks,
        uint256[] memory characterDefenses
    ) {
        // Generate our initial set of chainmons
        for (uint256 i = 0; i < characterNames.length; i++) {
            defaultChainMons.push(ChainMonAttributes({
                characterIndex: i,
                name: characterNames[i],
                imageURI: characterImages[i],
                hp: characterHPs[i],
                maxHp: characterHPs[i],
                attack: characterAttacks[i],
                defense: characterDefenses[i]
            }));

            ChainMonAttributes memory chainmon = defaultChainMons[i];
            console.log("Done initializing %s w/ HP %s, img %s", chainmon.name, chainmon.hp, chainmon.imageURI);
        }
    }
}