import React from "react";
import { Container, Col, Nav, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#181622" }}>
      <Container fluid className="text-white py-4">
        <Row className="text-center text-md-start">
          {/* Logo or Brand */}
          <Col xs={12} md={4} className="mb-3 d-flex justify-content-center align-items-center">
            <h2 className="mb-0">Astra</h2>
          </Col>

          {/* Navigation Links */}
          <Col xs={12} md={4} className="mb-3 d-flex justify-content-center">
            <Nav className="flex-column flex-md-row text-center gap-2 gap-md-4">
              <Nav.Link href="/" className="text-white p-0 footer-link">
                Home
              </Nav.Link>
              <Nav.Link href="/about-us" className="text-white p-0 footer-link">
                About Us
              </Nav.Link>
              <Nav.Link href="/feedback" className="text-white p-0 footer-link">
                Feedback
              </Nav.Link>
            </Nav>
          </Col>

          {/* Copyright */}
          <Col xs={12} md={4} className="d-flex justify-content-center align-items-center">
            <p className="mb-0">&copy; 2025 Astra. All rights reserved.</p>
          </Col>
        </Row>

        {/* Optional: Extra footer info or icons can go here */}
      </Container>

      {/* Custom Hover Effect */}
      <style>{`
        .footer-link:hover {
          color: #00bcd4;
          text-decoration: underline;
        }
      `}</style>
    </footer>
  );
}
