// test/NFT.test.js
const { expect } = require("chai");

describe("NFTCollection", function () {
  let NFTCollection;
  let nft;

  beforeEach(async function () {
    NFTCollection = await ethers.getContractFactory("NFTCollection");
    nft = await NFTCollection.deploy();
    await nft.deployed();
  });

  it("Should mint NFTs", async function () {
    await nft.mint();
    expect(await nft.ownerOf(1)).to.equal(await ethers.getSigner(0).getAddress());
  });

});
