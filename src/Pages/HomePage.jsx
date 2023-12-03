import { Container, Row, Col } from "react-bootstrap";
import { beritaTerbaru, logoSosmed } from "../data/home"; // Import the logoSosmed data
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import { useState } from "react";
import FeedbackComponent from "../Components/FeedbackComponent";

const HomePage = () => {
  const [showFeedback, setShowFeedback] = useState(false);

  const toggleFeedback = () => {
    setShowFeedback(!showFeedback);
  };

  return (
    <div className="navPadding">
      <header className="w-100 min-vh-100 homePage">
        <Container>
          <div>
            <h1 className="judul-kesatu"> OFFICIAL WEBSITE </h1>
            <h1 className="judul-kedua"> - KOTA MALANG - </h1>
            <div className="search-box">
              <input type="text" placeholder="Cari..." />
              <Link to="/beritaEkonomi">
                <button type="submit">🔍</button>
              </Link>
            </div>
          </div>
        </Container>
      </header>
      <div className="w-100 content">
        <Container>
          <div>
            <h1 className="berita-content"> Berita Terbaru </h1>
            <Row>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                  type: "bullets",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 100,
                  },
                }}
                className="mySwiper"
              >
                {beritaTerbaru.map((data) => {
                  return (
                    <SwiperSlide key={data.id}>
                      <div className="berita-container">
                        <h3 className="judul-berita">{data.judulBerita}</h3>
                        <div className="isi-berita">{data.isiBerita}</div>
                        <Link to={data.path}>Baca Selengkapnya</Link>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Row>
          </div>
        </Container>
      </div>
      <div className="sosmed-container">
        <Row>
          {logoSosmed.map((logo) => (
            <Col key={logo.id} xs={12}>
              <a href={logo.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={logo.logo}
                  alt="Social Media Logo"
                  className="sosmed-logo"
                />
              </a>
            </Col>
          ))}
        </Row>
      </div>
      <button className="feedback-button" onClick={toggleFeedback}>
        KRITIK & SARAN
      </button>
      {showFeedback && <FeedbackComponent closeFeedback={toggleFeedback} />}
    </div>
  );
};

export default HomePage;
