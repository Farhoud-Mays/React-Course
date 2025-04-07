import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  Dropdown,
  Card,
} from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SideNav from "./SideNav"; // Make sure this returns the green list of categories

function Contact() {
  const products = [
    { title: "Fresh Fruit", image: "/image/Fresh_Fruit.png" },
    { title: "Dried Fruit", image: "/image/Dried_Fruit.png" },
    { title: "Vegetables", image: "/image/Vegetables.png" },
    { title: "Drink Fruits", image: "/image/Drink_Fruit.png" },
  ];

  const settings = {
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    speed: 500,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Container fluid className="bg-gray-100 py-4">
      <Container>
        <Row>
          <Col lg={3}>
            <SideNav />
          </Col>

          {/* Right section - Search + Banner */}
          <Col lg={9}>
            {/* Top Bar: Search and Call */}
            <Row className="mb-3">
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
                      <Dropdown.Item href="#/action-2">
                        Vegetables
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  {/* <span className="distance" /> */}
                  <Form.Control placeholder="What do you need?" />

                  <Button variant="success" className="fw-bold ">
                    SEARCH
                  </Button>
                </InputGroup>
              </Col>
              <Col
                md={4}
                className="d-flex justify-content-end align-items-center gap-2"
              >
                <img src="./image/Call_Icon.png" alt="Call_Icon" width={30} />
                <div>
                  <div className="fw-bold">+65 11.188.888</div>
                  <small className="text-muted">support 24/7 time</small>
                </div>
              </Col>
            </Row>

            {/* Banner */}
            <Container>
              <Card
                className="border-0"
                style={{ backgroundColor: "rgba(236, 233, 233, 0.485)" }}
              >
                <Row className="align-items-center">
                  <Col md={6} className="p-4">
                    <h6 style={{ color: "green", fontWeight: "bold" }}>
                      FRUIT FRESH
                    </h6>
                    <h1 className="fw-bold">Vegetable 100% Organic</h1>
                    <p className="text-muted">
                      Free Pickup and Delivery Available
                    </p>
                    <Button
                      variant="success"
                      className="text-uppercase px-4 py-2"
                      style={{ borderRadius: "0" }}
                    >
                      Shop Now
                    </Button>
                  </Col>
                  <Col md={6} className="text-center">
                    <img
                      src="./image/Vegetable.png"
                      alt="Vegetables"
                      style={{ width: "80%", maxWidth: "400px" }}
                    />
                  </Col>
                </Row>
              </Card>
            </Container>
          </Col>
        </Row>

        {/* Slider Section */}
        <Row className="mt-5">
          <Col>
            <Slider {...settings}>
              {products.map((product, index) => (
                <div key={index} className="p-2">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={product.image}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <Card.Body>
                      <Card.Title className="text-center">
                        {product.title}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
