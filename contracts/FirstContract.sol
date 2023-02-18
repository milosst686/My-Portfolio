// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.6.0) (vendor/amb/IAMB.sol)
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract FirstContract is ERC721 {
    using Counters for Counters.Counter;
    using SafeMath for uint256;

    Counters.Counter private _tokenIds;
    uint256 private _nftPrice = 1000000000000000; // 0.001 ETH

    constructor() ERC721("MyNFT", "MNFT") {}

    function mintNFT(address recipient, string memory tokenURI)
        public
        payable
        returns (uint256)
    {
        require(msg.value >= _nftPrice, "Insufficient payment");
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _safeMint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);
        return newItemId;
    }

    function withdraw() public {
        uint256 balance = address(this).balance;
        payable(msg.sender).transfer(balance);
    }
}
