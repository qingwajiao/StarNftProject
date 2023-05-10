const { ethers } = require("hardhat");
const { upgrades } = require("hardhat");

const proxyAddress = '0x33623507a447592d77d79e452BCf86Beec7b7071'

async function main() {

  console.log("指定的 UUPS Proxy 合約地址", proxyAddress)

  const NFTV2 = await ethers.getContractFactory("STAKINGV2")
  console.log("升級合約進行中...")

  const proxy = await upgrades.upgradeProxy(proxyAddress, NFTV2)
  console.log("NFTV2Proxy 合約地址", proxy.address)

  console.log("等待2個網路確認 ... ")
  const receipt = await proxy.deployTransaction.wait(2);

  console.log("NFTV2邏輯合約地址 getImplementationAddress", await upgrades.erc1967.getImplementationAddress(proxy.address))

}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
