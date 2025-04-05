import React from "react";
import "./style.css";
import { Container, Row, Col, Form } from "react-bootstrap";

function Footer() {
  return (
    <div className="parint">
      <div className="Footer">
        <Container>
          <Row>
            {/* Left Side */}
            <Col md={6} d-flex justify-content-end align-items-center>
              <img
                src="/image/Email_Icon.png"
                alt="Email_Icon"
                className="icon"
              />
              hello@colorlib.com
              <span className="distance" />
              Free Shipping for all Order of $99
            </Col>

            {/* Right Side */}
            <Col
              md={6}
              className="d-flex justify-content-end align-items-center gap-2"
            >
              <img
                src="/image/Facebook_Icon.png"
                alt="Facebook"
                className="icon"
                style={{ width: 20, height: 20 }}
              />
              <img
                src="/image/Twitter_Icon.png"
                alt="Twitter"
                className="icon"
                style={{ width: 30, height: 30 }}
              />
              <img
                src="/image/LinkedIn_Icon.png"
                alt="LinkedIn"
                className="icon"
              />
              <img
                src="/image/Pinterest_Icon.png"
                alt="Pinterest"
                className="icon"
                style={{ width: 20, height: 20 }}
              />
              <span className="distance" />
              <img
                src="/image/America_flag.png"
                alt="Flag"
                className="icon"
                style={{ width: 30, height: 30 }}
              />
              <Form.Select size="sm" className="lang-select" id="select">
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
                <option value="Arabic">Arabic</option>
              </Form.Select>
              <span className="distance" />
              <img
                src="/image/Personal_Icon.png"
                alt="Personal_Icon"
                className="icon"
                style={{ width: 30, height: 30 }}
              />
              Login
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
