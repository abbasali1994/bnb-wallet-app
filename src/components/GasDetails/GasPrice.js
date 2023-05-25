import React, { useState, useEffect, useContext } from "react";
import { Col } from "reactstrap";
import { WalletContext } from "../../context/WalletContext";
import { getGasPrice } from "../../utils/ethersUtils";

const GasPrice = () => {
  const { address } = useContext(WalletContext);
  const [currentGasPrice, setCurrentGasPrice] = useState();

  useEffect(() => {
    const fetchGasPrice = async () => {
      try {
        if (address) {
          const gasPrice = await getGasPrice();
          setCurrentGasPrice(`${gasPrice} Gwei`);
        }
      } catch (error) {
        console.log(`Error fetching gas price:, ${error}`);
      }
    };
    fetchGasPrice();
  }, [address]);

  return <Col>{currentGasPrice}</Col>;
};

export default GasPrice;
