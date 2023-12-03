import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import { layananKesehatan } from "../data/layanandaerah";
import KesehatanComponent from "../Components/KesehatanComponent";

function LayananDaerah_Kesehatan() {
  const defaultPopupData = layananKesehatan.filter((item) => item.id === 1);
  const [showPopup, setShowPopup] = useState(true);
  const [popupData, setPopupData] = useState(defaultPopupData);

  const handlePopupToggle = (itemId) => {
    console.log(itemId)
    const selectedPopupData = layananKesehatan.filter(
      (item) => item.id === itemId
    );
      
    setPopupData(selectedPopupData);
    setShowPopup(true);
  };
  
  return (
    <div className="kesehatan-page">
      <h1>Layanan Daerah Kesehatan</h1>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
          type: "bullets",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {layananKesehatan.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="swiper-item" onClick={() => handlePopupToggle(item.id)}>
              <img
                src={item.gambar}
                alt={item.nama}
                style={{ width: "100%", cursor: "pointer" }}
                onClick={() => {
                  handlePopupToggle(item.id);
                  console.log(item.id);
                }}
              />

              <div
                onClick={() => handlePopupToggle(item.id)}
                style={{
                  color: "white",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                {item.nama}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {showPopup && (
        <KesehatanComponent
          data={popupData}
          closePopup={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}

export default LayananDaerah_Kesehatan;
