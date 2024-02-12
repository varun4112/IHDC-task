import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "react-bootstrap";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import "./carousel.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "40px",
      }}
      onClick={onClick}
    >
      ←
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "black",
        borderRadius: "40px",
      }}
      onClick={onClick}
    >
      →
    </div>
  );
}

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    vertical: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="slider-container p-3">
        <Slider {...settings}>
          <div className="ms-4">
            <Card style={{ width: "12rem" }}>
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title className="cardtitle">
                  Lower Interest Rates
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="ms-3">
            <Card style={{ width: "12rem" }}>
              <Card.Img variant="top" src={img2} />
              <Card.Body>
                <Card.Title className="cardtitle">
                  Intrest Free Payments{" "}
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="ms-3">
            <Card style={{ width: "12rem" }}>
              <Card.Img variant="top" src={img3} />
              <Card.Body>
                <Card.Title className="cardtitle">
                  Discounts on Material
                </Card.Title>
              </Card.Body>
            </Card>{" "}
          </div>
          <div className="ms-3">
            <Card style={{ width: "12rem" }}>
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title className="cardtitle">
                  Lower Interest Rates
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="ms-3">
            <Card style={{ width: "12rem" }}>
              <Card.Img variant="top" src={img2} />
              <Card.Body>
                <Card.Title className="cardtitle">
                  Intrest Free Payments{" "}
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="ms-3">
            <Card style={{ width: "12rem" }}>
              <Card.Img variant="top" src={img3} />
              <Card.Body>
                <Card.Title className="cardtitle">
                  Discounts on Material
                </Card.Title>
              </Card.Body>
            </Card>{" "}
          </div>
          <div className="ms-3">
            <Card style={{ width: "12rem" }}>
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title className="cardtitle">
                  Lower Interest Rates
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="ms-3">
            <Card style={{ width: "12rem" }}>
              <Card.Img variant="top" src={img2} />
              <Card.Body>
                <Card.Title className="cardtitle">
                  Intrest Free Payments{" "}
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="ms-3">
            <Card style={{ width: "12rem" }}>
              <Card.Img variant="top" src={img3} />
              <Card.Body className="mb-0">
                <Card.Title className="cardtitle">
                  Discounts on Material
                </Card.Title>
              </Card.Body>
            </Card>{" "}
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Carousel;
