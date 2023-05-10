
const { ethers } = require("hardhat");

async function signNonceAndAmountWithPrivateKey() {
  // 1.获取wallet   
  let privateKey = "0x34e99c293405283be8dddc8e847c87ceae9e7e91b1995fd94aabf5032c8917c4" 
  let wallet = new ethers.Wallet(privateKey);   
      // 2. 签名内容进行 solidityKeccak256格式 Hash  【--- 此处为参数类型----】   【---此处为参数值------】   
  // let result = ethers.utils.solidityKeccak256([ 'int','string','int' ], [21, "w" ,5]);  
  let result = ethers.utils.solidityKeccak256([ 'int','int','int' ], [1,5,1]);  
        // 3.转成UTF8 bytes  
  let arrayifyMessage = ethers.utils.arrayify(result);  
          // 4.签名   
  let signPromise = wallet.signMessage(arrayifyMessage)  
  console.log(signPromise);
}

signNonceAndAmountWithPrivateKey();
