import "./App.css";
import React from "react";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <Container>
      <Row>
        <Col md={{ span: 3, offset: 3 }}>
          <>
            {["Warning"].map((variant) => (
              <Card
                bg={variant.toLowerCase()}
                key={variant}
                text={variant.toLowerCase() === "light" ? "dark" : "white"}
                style={{ width: "40rem" }}
                className="mb-2"
              >
                <Card.Header>Business Card</Card.Header>
                <Card.Body>
                  <Card.Title className="Tex"> Genius </Card.Title>
                  <Row>
                    <Col className="App-header">
                      <div>
                        <ProfilePhoto />
                      </div>
                      <div>
                        <FullName />
                      </div>
                      <div>
                        <Address />
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
          </>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
