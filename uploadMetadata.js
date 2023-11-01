// uploadMetadata.js
const ipfsClient = require("ipfs-http-client");
const fs = require("fs");

async function uploadToIPFS() {
  const ipfs = ipfsClient.create({ host: "ipfs.infura.io", port: 5001, protocol: "https" });

  const metadata = {
    // Your metadata properties here
  };

  const { cid } = await ipfs.add(JSON.stringify(metadata));
  console.log("IPFS CID:", cid.toString());
}

uploadToIPFS();
