import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import Img1 from "../assets/images/partner1.png";
import Img2 from "../assets/images/partner2.png";
import Img3 from "../assets/images/partner3.png";
import Img4 from "../assets/images/partner4.png";
import Img5 from "../assets/images/partner5.png";
import Img6 from "../assets/images/partner6.png";
import Img7 from "../assets/images/partner7.png";
import Img8 from "../assets/images/partner8.png";

SwiperCore.use([Autoplay]);

const images1 = [
  { id: 1, url: Img1 },
  { id: 2, url: Img2 },
  { id: 3, url: Img3 },
  { id: 4, url: Img4 },
  { id: 5, url: Img5 },
  { id: 6, url: Img6 },
  { id: 7, url: Img7 },
  { id: 8, url: Img8 },
];

const images2 = [
  { id: 1, url: Img8 },
  { id: 2, url: Img7 },
  { id: 3, url: Img6 },
  { id: 4, url: Img5 },
  { id: 5, url: Img4 },
  { id: 6, url: Img3 },
  { id: 7, url: Img2 },
  { id: 8, url: Img1 },
];

const Slider = (props) => {
  return props.image === 1 ? (
    <Swiper
      autoplay={{ delay: 1500 }}
      spaceBetween={10}
      slidesPerView={4}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 4,
        },
      }}
    >
      {images1.map((image) => (
        <SwiperSlide
          key={image.id}
          style={{
            // border: "1px solid red",
            display: "flex",
            justifyContent: "center",
            boxShadow: " 0px 0px 5px rgba(0, 0, 0, 0.3)",
          }}
        >
          <img
            src={image.url}
            alt=""
            style={{
              padding: "10px",
              cursor: "pointer",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <Swiper
      autoplay={{ delay: 1500 }}
      spaceBetween={10}
      slidesPerView={4}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 4,
        },
      }}
    >
      {images2.map((image) => (
        <SwiperSlide
          key={image.id}
          style={{
            // border: "1px solid red",
            display: "flex",
            justifyContent: "center",
            boxShadow: " 0px 0px 5px rgba(0, 0, 0, 0.3)",
          }}
        >
          <img
            src={image.url}
            alt=""
            style={{
              padding: "10px",
              cursor: "pointer",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
