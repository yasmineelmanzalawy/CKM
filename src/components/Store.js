import React from "react";
import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import StoreItem from "./StoreItem";
import { useEffect , useState } from "react";
import axios from "../axios.config";
const Store = () => {
  const [menu,setMenu] = useState([])
  useEffect(() => {
    const getinventory = async () => {
      const url = `api/menu-items/${localStorage.getItem('test')}`;
      const data = await axios.get(url);
      console.log(data);
      console.log(menu);
      setMenu(data.data);
    };
    getinventory();
  }, []);
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {menu.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
