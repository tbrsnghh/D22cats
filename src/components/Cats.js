import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddNewCat, delCats, fetchCats } from "../redux/catsSlice";
import {
  Container,
  Table,
  Button,
  Input,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Col,
  Row,
} from "reactstrap";
import Onput from "./Input";
import Header from "./Header";
export default function Cats() {
  const dispatch = useDispatch();
  const { cats } = useSelector((state) => state.cats);
  useEffect(() => {
    dispatch(fetchCats());
  }, []);
  const handle_del = (id) => {
    dispatch(delCats(id));
  };
  const handle_add = (cat) => {
    dispatch(AddNewCat(cat));
  };
  const handle_reCheck = (cat) => {
    dispatch(handle_reCheck(cat));
  };
  return (
    <Container fluid>
      <Header />
      <div>
        <Onput />
      </div>

      {/* <Container>
      <Row>
        <Col lg={3} md={4} sm={6} xs={6} className="">
          {cats.map((item, index) => (
            <Card
              body
              color="dark"
              inverse
              style={{
                width: "18rem",
              }} key={index}
            >
              <img alt="Sample" src={item.avatar} />
              <CardBody>
                <CardTitle tag="h5">{item.name}</CardTitle>
                
                <Button>Delete</Button>
              </CardBody>
            </Card>
          ))}
        </Col>
      </Row>
      </Container> */}


      <Table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Birth</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {cats.map((item, index) => (
            <tr key={index}>
              <td scope="row">{item.name}</td>
              <td>{item.birthdate}</td>
              <td>
                <Button
                  className="btn-success"
                  onClick={() => handle_del(item.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
