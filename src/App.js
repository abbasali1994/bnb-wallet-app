import React, { useContext } from "react";
import "./App.css";
import ConnectWallet from "./components/ConnectWallet";
import SendToken from "./components/SendToken";
import { WalletContext } from "./context/WalletContext";
import TransactionHistoryTable from "./components/TransactionHistory";

const App = () => {
  const { address } = useContext(WalletContext);

  return (
    <div className="app">
      {!address ? (
        <ConnectWallet />
      ) : (
        <>
          <SendToken />
          <TransactionHistoryTable />
        </>
      )}
    </div>
  );
};

export default App;
