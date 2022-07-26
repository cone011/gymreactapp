import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};
const images = [
  "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
];

const CarouselUI = ({ deviceType }) => {
  return (
    <Carousel
      ssr
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
    >
      {images.slice(0, 5).map((image, index) => {
        return (
          <div key={index} style={{ position: "relative" }}>
            <img
              draggable={false}
              alt="text"
              style={{ width: "100%", height: "100%" }}
              src={image}
            />
            <p
              style={{
                position: "absolute",
                left: "50%",
                bottom: 0,
                color: "white",
                transform: " translateX(-50%)",
              }}
            >
              Legend:{index}.
            </p>
          </div>
        );
      })}
    </Carousel>
  );
};

export default CarouselUI;
