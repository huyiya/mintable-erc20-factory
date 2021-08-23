// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;

import "./tokens/ERC20.sol";

/**
 * @title ERC20Mintable
 * @dev ERC20 minting logic
 */
contract MintableERC20 is ERC20 {

  address public _factory;
  address public _creator;

  constructor(
    string memory name,
    string memory symbol,
    uint8 decimals,
    address creator
  ) public ERC20(name, symbol) {
    _factory = msg.sender;
    _creator = creator;
    _setupDecimals(decimals);
  }

  /**
   * @dev Function to mint tokens
   * @param value The amount of tokens to mint.
   * @return A boolean that indicates if the operation was successful.
   */
  function mint(uint256 value) public returns (bool) {
    _mint(_msgSender(), value);
    return true;
  }
}
