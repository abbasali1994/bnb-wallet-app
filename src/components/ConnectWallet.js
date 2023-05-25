import React, { useContext } from "react";
import { Button, Card, CardBody } from "reactstrap";
import { WalletContext } from "../context/WalletContext";

const ConnectWallet = () => {
  const { connectWallet } = useContext(WalletContext);

  return (
    <Card style={{ width: "400px", margin: "auto" }}>
      <CardBody>
        <Button onClick={() => connectWallet()} size="md" color="primary" block>
          Connect Wallet
        </Button>
      </CardBody>
    </Card>
  );
};

export default ConnectWallet;
