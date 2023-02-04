import React from "react";
import { Col, Row } from "react-bootstrap";
import StoreItem from "../storeItems";
const Store = ({ storeItems, callBack }) => {
  return (
    <div>
      <Row md={2} xs={1} lg={3} className="g-4">
        {storeItems.map((storeItems) => (
          <Col key={storeItems.id}>
            <StoreItem storeItems={storeItems} callBack={callBack} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Store;
