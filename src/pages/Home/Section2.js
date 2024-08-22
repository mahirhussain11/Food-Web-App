import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";

// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Try our new Onion Bliss Burger, featuring freshly caramelized onions atop a succulent beef patty. Taste the perfect blend of flavors in every bite!`,
  },
  {
    image: Salad,
    title: "Qualty Foods",
    paragraph: `Indulge in the Onion Bliss Burger, made with premium beef and freshly caramelized onions. Experience the quality and taste that sets us apart.`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Enjoy the Onion Bliss Burger with the fastest delivery in town, ensuring you get fresh, hot, and delicious food right to your door. Savor quality and convenience with every bite!`,
  },
  // Add more mock data objects as needed
];

function Section2() {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>The burger tastes better when you eat it with your family</h2>
              <p>
                A burger tastes better when enjoyed with family. The shared
                laughter, stories, and togetherness turn a simple meal into a
                memorable experience, making every bite more delightful.
              </p>
              <Link to="/" className="btn order_now btn_red">
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;
