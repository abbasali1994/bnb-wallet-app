import React, { useContext } from "react";
import { Col, Row } from "reactstrap";
import { WalletContext } from "../../context/WalletContext";
import formatAddress from "../../utils/formatAddress";

const WalletDetails = () => {
  const { address, tokenBal, bnbBal } = useContext(WalletContext);
  const trimmedAccount = formatAddress(address);

  return (
    <>
      <Row>
        <Col sm={6} className="heading">
          Account:
        </Col>
        <Col sm={6} className="value">
          {trimmedAccount}
        </Col>
      </Row>
      <Row>
        <Col sm={6} className="heading">
          BNB Balance:
        </Col>
        <Col sm={6} className="value">
          {bnbBal}
        </Col>
      </Row>
      <Row>
        <Col sm={6} className="heading">
          BabyDoge Balance:
        </Col>
        <Col sm={6} className="value">
          {tokenBal}
        </Col>
      </Row>
    </>
  );
};

export default WalletDetails;
