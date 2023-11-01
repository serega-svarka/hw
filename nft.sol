// contracts/NFT.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract NFTCollection is ERC721Enumerable {
    constructor() ERC721("NFTCollection", "NFTC") {}

    function mint() external {
        uint256 tokenId = totalSupply() + 1;
        _mint(msg.sender, tokenId);
    }
}
