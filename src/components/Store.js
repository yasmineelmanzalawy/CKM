import React from "react";
import { Col, Row } from "react-bootstrap";
import StoreItem from "./StoreItem";
import { useEffect , useState } from "react";
import axios from "../axios.config";
import './fade.css'
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
    <div className="root">
      <div className="store-container">
      <h1 className="text-3xl text-center font-bold text-orange-500 mb-4">
        Brand Name
      </h1>
        <div className="grid grid-cols-4 gap-4">
          {menu.map((item) => (
            <Col className="card" key={item.id}>
              <StoreItem {...item} />
            </Col>
          ))}
        </div>
      </div>
    </div>
  </>
  );
};

export default Store;
