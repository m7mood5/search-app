import React from "react";
import { Card } from "react-bootstrap";
import { BsFillCartCheckFill } from "react-icons/bs";

const StoreItem = ({ storeItems, callBack }) => {
  return (
    <>
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={storeItems.image}
          style={{ height: "100px", objectFit: "cover" }}
        />
        <Card.Body className>
          <Card.Title>{storeItems.title}</Card.Title>
          <Card.Text>{storeItems.price}</Card.Text>
          <Card.Text>{storeItems.disc}</Card.Text>
          <div>
            <button
              onClick={callBack}
              style={{
                border: "none",
                color: "#1675d8",
                backgroundColor: "white",
              }}
            >
              <BsFillCartCheckFill /> details
            </button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default StoreItem;
