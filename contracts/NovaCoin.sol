// contracts/NovaCoin.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract NovaCoin is ERC20 {
    constructor() ERC20("NovaCoin", "NOVA") {
        _mint(msg.sender, 21000000 * 10**18);
    }
}
