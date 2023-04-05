import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Autoplay,
  Keyboard,
  Pagination,
  Scrollbar,
  Navigation,
} from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'
import image1 from './img/1.jpg'
import image2 from './img/2.jpg'
import image3 from './img/3.jpg'
import image4 from './img/4.jpg'
import { useState } from 'react'

function App() {
  const [swiper, setSwiper] = useState(null)
  const [index, setIndex] = useState(0)
  return (
    <>
      <Swiper
        navigation={true}
        loop={true}
        keyboard={true}
        pagination={{
          clickable: true,
        }}
        spaceBetween={20}
        slidesPerView={2}
        slidesPerGroup={2}
        onSlideChange={(swiper) => setIndex(swiper.activeIndex)}
        onSwiper={setSwiper}
        modules={[
          Autoplay,
          Keyboard,
          Pagination,
          Scrollbar,
          Navigation,
        ]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        scrollbar={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          991: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
      >
        <SwiperSlide>
          <img src={image1} alt="slider 1" style={{ width: '100%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="slider 2" style={{ width: '100%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="slider 3" style={{ width: '100%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="slider 4" style={{ width: '100%' }} />
        </SwiperSlide>
      </Swiper>
      <span
        onClick={() => {
          if (swiper) {
            swiper.slideTo(index + 1)
          }
        }}
        style={{padding: '5px',border: '1px solid #000000',display:'inline-block'}}
      >
        Slide To Next
      </span>
    </>
  )
}

export default App
