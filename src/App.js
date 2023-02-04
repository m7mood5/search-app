import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { Mcontainer } from "./layout";
import { Input, Store } from "./data";
import Accordion from './components/Accordion';
import storeItems from "./data/storeItems.json";
import Rating from "./components/ResetBtn";

const App = () => {
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);

  const restHandler = (e) => {
    setSearch("");
  };
  const callBack = () => {
    setToggle(true);
  };

  const returnItems = () => {
    if (search.length > 0) {
      return storeItems.filter((item) => item.title.includes(search));
    }
    return storeItems;
  };

  const inputHandler = (e) => setSearch(e.target.value);
  return (
    <>
      <Container>
        <Row>
          <Col xs lg="2">
          <Accordion/>
          </Col>
          <Col>
            <Mcontainer>
              <Input
                name="search"
                placeholder="search"
                value={search}
                onChange={inputHandler}
              />
              <Store storeItems={returnItems()} callBack={callBack} />
            </Mcontainer>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
