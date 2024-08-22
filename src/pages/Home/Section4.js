import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
                Nothing brings people together like a good burger. It’s the
                perfect centerpiece for gatherings, offering something for
                everyone. Imagine enjoying:
              </p>
              <ul>
                <li>
                  <p>Juicy, flavorful patties that satisfy every taste bud.</p>
                </li>
                <li>
                  <p>Fresh, crisp toppings that add a delightful crunch.</p>
                </li>
                <li>
                  <p>Warm, toasted buns that complete the perfect bite.</p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;
