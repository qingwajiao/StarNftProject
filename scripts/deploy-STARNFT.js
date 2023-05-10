// scripts/deploy.js

const { ethers } = require("hardhat");
const { upgrades } = require("hardhat");

async function main() {

  const StarNFT = await ethers.getContractFactory("StarNFT")
  
  console.log("正在發佈 STARNFT ...")
  const proxy = await upgrades.deployProxy(StarNFT, { initializer: 'initialize' })
  
  console.log("STARNFT_Proxy 合約地址", proxy.address)
  console.log("等待兩個網路確認 ... ")
  const receipt = await proxy.deployTransaction.wait(2);

  console.log("管理合約地址 getAdminAddress", await upgrades.erc1967.getAdminAddress(proxy.address))
  console.log("STARNFT邏輯合約地址 getImplementationAddress", await upgrades.erc1967.getImplementationAddress(proxy.address))    
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
