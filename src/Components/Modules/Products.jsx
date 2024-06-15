import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

const Products = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4001/api/category") //make sure the address is right
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <Row>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>
                  <img alt="" src={item.thumbnail} height="100" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Row>
    </Container>
  );
};

export default Products;
