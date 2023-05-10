const { ethers } = require("hardhat");
const { upgrades } = require("hardhat");

async function main() {

  // const NFT = await ethers.getContractFactory("StarNFT")
  const STAKING = await ethers.getContractFactory("STAKING")
  
  // console.log("正在發佈 StarNFT ...")
  // const proxy = await upgrades.deployProxy(NFT, ["StarNFT","StarNFT"], { initializer: 'initialize', kind: 'uups' })
  
  // console.log("Proxy 合約地址", proxy.address)
  // console.log("等待兩個網路確認 ... ")
  // const receipt = await proxy.deployTransaction.wait(2);
  // console.log("StarNFT邏輯合約地址 getImplementationAddress", await upgrades.erc1967.getImplementationAddress(proxy.address))

  // Proxy 合約地址 0x0DD738a75aAd5220918106fEf79f9A95F3a850A8
  // 等待兩個網路確認 ... 
  // StarNFT邏輯合約地址 getImplementationAddress 0x5F4E123A8D228dEDed97e1d0BdF2A72dacaE7afB


  console.log("正在發佈 STAKING ...")
  const stakProxy = await upgrades.deployProxy(STAKING, ['0x0DD738a75aAd5220918106fEf79f9A95F3a850A8'], { initializer: 'initialize', kind: 'uups' })
  
  console.log("stakProxy 合約地址", stakProxy.address)
  console.log("等待兩個網路確認 ... ")
  const receipt = await stakProxy.deployTransaction.wait(2);

  console.log("stakProxy邏輯合約地址 getImplementationAddress", await upgrades.erc1967.getImplementationAddress(stakProxy.address))

//   stakProxy 合約地址 0x33623507a447592d77d79e452BCf86Beec7b7071
//  等待兩個網路確認 ... 
// stakProxy邏輯合約地址 getImplementationAddress 0xb75dc4F20dc4E9fb1e99B1Ba6889ec4fF2543B0f


}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})