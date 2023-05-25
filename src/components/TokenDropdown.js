import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Col,
  Row,
} from "reactstrap";

const TokenDropdown = ({ selectedToken, onSelectToken }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Row>
      <Col xs={12} className="heading">
        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
          <DropdownToggle caret color="primary">
            Send {selectedToken}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => onSelectToken("BNB")}>
              Send BNB
            </DropdownItem>
            <DropdownItem onClick={() => onSelectToken("BabyDoge")}>
              Send BabyDoge
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default TokenDropdown;
