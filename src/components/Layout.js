import React from "react";
import Slider from "react-slick";
import { Card } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  { title: "Fresh Fruit", image: "/images/fresh-fruit.jpg" },
  { title: "Dried Fruit", image: "/images/dried-fruit.jpg" },
  { title: "Vegetables", image: "/images/vegetables.jpg" },
  { title: "Drink Fruits", image: "/images/juice.jpg" },
];

function CardSlider() {
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
    <div className="container mt-4">
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
                <Card.Title className="text-center">{product.title}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CardSlider;
