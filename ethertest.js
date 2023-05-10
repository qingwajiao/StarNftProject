const { ethers } = require("ethers");



async function main() {

// 构建 provider，可以理解为与区块链交互的桥梁
// 1. 可使用最基础的 JsonRpcProvider 进行构建 provider
const INFURA_ID = 'xxx..';
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/fa99da8fb08c4b94b7e9a29f6d7f7c09`);

    let balance = await provider.getBalance('0xA86d6876E8c50D66A00B1A5E81B9D5a6fF0aA204'); 

    let balance_in_ether = ethers.utils.formatEther(balance);

    console.log("balance:",balance_in_ether)
  
  }
  
  main().catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
  