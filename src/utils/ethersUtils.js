import { ethers } from "ethers";
import { BABYDOGE_TOKEN, CHAIN_ID } from "./constants";
import ERC20_ABI from "./erc20Abi";

const getAccount = async () => {
  let value = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  await changeNetwork();
  return value;
};

const changeNetwork = async () => {
  if (window.ethereum) {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: CHAIN_ID }],
      });
    } catch (error) {
      // This error code indicates that the chain has not been added to MetaMask
      console.log(error);
    }
  }
};

export const getSignerAddress = async () => {
  const signerAddressArray = await getAccount();
  let signerAddress = await signerAddressArray[0];
  return signerAddress;
};

export const isValidAddress = (receiversAddress) => {
  try {
    ethers.utils.getAddress(receiversAddress);
    return true;
  } catch (error) {
    return false;
  }
};

export const getBNBBalance = async () => {
  try {
    const address = await getSignerAddress();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(address);
    const balanceInBNB = ethers.utils.formatEther(balance);
    return balanceInBNB;
  } catch (error) {
    console.log("Error getting BNB balance:", error);
    return null;
  }
};

export const getTokenBalance = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  let tokenContract = new ethers.Contract(
    BABYDOGE_TOKEN.address,
    ERC20_ABI,
    signer
  );
  const signerAdd = await signer.getAddress();
  const balance = await tokenContract.balanceOf(signerAdd);
  const balanceInWei = balance.toString();
  const balanceInDecimals = ethers.utils.formatEther(balanceInWei);
  return balanceInDecimals.slice(0, 7);
};

export const getGasPrice = async () => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const gasPrice = await provider.getGasPrice();
    const gasPriceInWei = gasPrice.toString();
    const gasPriceInGwei = ethers.utils.formatUnits(gasPriceInWei, "gwei");
    return gasPriceInGwei;
  } catch (error) {
    console.log("Error fetching gas price:", error);
    return null;
  }
};

