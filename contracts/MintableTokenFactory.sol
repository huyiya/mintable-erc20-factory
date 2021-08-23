// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;

import "./tokens/Ownable.sol";
import "./MintableERC20.sol";

contract MintableTokenFactory is Ownable {

  address[] public tokens;

  event TokenCreated(address indexed token, address creator);

  function allTokensLength() external view returns (uint256) {
    return tokens.length;
  }

  function createMintableToken(
    string memory name,
    string memory symbol,
    uint8 decimals
  ) external returns (address) {
    address creator = msg.sender;
    MintableERC20 mintableERC20 = new MintableERC20(name, symbol, decimals, creator);
    address mintableERC20Address = address(mintableERC20);

    tokens.push(mintableERC20Address);

    emit TokenCreated(mintableERC20Address, creator);
    return mintableERC20Address;
  }
}