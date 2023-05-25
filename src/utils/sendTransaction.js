import { ethers } from "ethers";
import { BABYDOGE_TOKEN } from "./constants";
import ERC20_ABI from "./erc20Abi";

export const sendTransaction = async (
  amount,
  receiversAddress,
  gasLimit,
  selectedToken
) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const parsedAmount = ethers.utils.parseUnits(amount.toString(), 18);

    if (selectedToken === "BNB") {
      const tx = await signer.sendTransaction({
        to: receiversAddress,
        value: parsedAmount,
        gasLimit: ethers.BigNumber.from(gasLimit),
      });
      console.log("BNB Transaction sent:", tx);
    } else if (selectedToken === "BabyDoge") {
      const babyDogeContract = new ethers.Contract(
        BABYDOGE_TOKEN.address,
        ERC20_ABI,
        signer
      );
      const tx = await babyDogeContract.transfer(
        receiversAddress,
        parsedAmount,
        {
          gasLimit: ethers.BigNumber.from(gasLimit),
        }
      );
      console.log("BabyDoge Transaction sent:", tx);
    } 
};
