import React, { useState } from "react";
import { Col, Input, Row } from "reactstrap";
import { BsChevronDown } from "react-icons/bs";
import GasPrice from "./GasPrice";

const GasDetails = ({
  gasLimit,
  setGasLimit,
}) => {
  const [showGasLimitInput, setShowGasLimitInput] = useState(false);
  const toggleGasLimitInput = () => {
    setShowGasLimitInput(!showGasLimitInput);
  };
  return (
    <><Row>
      <Col style={{ color: "#158DE8" }} xs={9}>
        Current gas price:
      </Col>
      <Col style={{ color: "#6A6A6A" }}>
        <GasPrice />
      </Col>
    </Row>
      <Row>
        <Col xs={12} className="heading">
          <div className="gas-limit-container">
            <div className="gas-limit-toggle" onClick={toggleGasLimitInput}>
              Set Gas Limit <BsChevronDown />
            </div>
            {showGasLimitInput && (
              <Input
                className="inputValue"
                placeholder="Gas Limit"
                type="number"
                value={gasLimit}
                onChange={(e) => setGasLimit(e.target.value)}
              />
            )}
          </div>
        </Col>
      </Row>
    </>

  );
};

export default GasDetails;
