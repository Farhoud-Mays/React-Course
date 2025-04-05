import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  Dropdown,
} from "react-bootstrap";

function Contact() {
  return (
    <div className="col-8">
      <Container>
        <Row className="justify-content-center mt-4">
          <Col md={8}>
            <InputGroup>
              <Dropdown>
                <Dropdown.Toggle
                  variant="light"
                  id="dropdown-basic"
                  className="fw-bold"
                >
                  All Categories
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Fruits</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Vegetables</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Form.Control
                placeholder="What do you need?"
                aria-label="Search Input"
              />

              <Button variant="success" id="button-addon2" className="fw-bold">
                SEARCH
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
