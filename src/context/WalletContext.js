import { createContext, useEffect, useState } from "react";
import {
  getBNBBalance,
  getSignerAddress,
  isValidAddress,
  getTokenBalance,
} from "../utils/ethersUtils";

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [address, setAddress] = useState();
  const [tokenBal, setTokenBal] = useState();
  const [bnbBal, setBnbBal] = useState();

  useEffect(() => {
    const init = async () => {
      try {
        if (window.ethereum && window.ethereum.isMetaMask) {
          const addr = await getSignerAddress();
          const bnbBalance = await getBNBBalance();
          const tokenBalance = await getTokenBalance();
          setBnbBal(bnbBalance);
          setTokenBal(tokenBalance);
          setAddress(addr);
        }
      } catch (err) {
        console.log(err);
      }

      if (window.ethereum) {
        window.ethereum.on("accountsChanged", connectWallet);
      }
    };
    init();
  }, []);

  const fetchBalances = async () => {
    if (isValidAddress(address)) {
      const bnbBalance = await getBNBBalance();
      const tokenBalance = await getTokenBalance();
      setBnbBal(bnbBalance);
      setTokenBal(tokenBalance);
    }
  };

  const connectWallet = async () => {
    try {
      if (window.ethereum && window.ethereum.isMetaMask) {
        const addr = await getSignerAddress();
        const bnbBalance = await getBNBBalance();
        const tokenBalance = await getTokenBalance();
        setBnbBal(bnbBalance);
        setTokenBal(tokenBalance);
        setAddress(addr);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const disconnectWallet = async () => {
    try {
      setAddress(null);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <WalletContext.Provider
      value={{
        address,
        bnbBal,
        tokenBal,
        connectWallet,
        disconnectWallet,
        fetchBalances,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
