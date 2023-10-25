// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay  } from 'swiper/modules';
import 'swiper/css/navigation';
// import Swiper styles
import 'swiper/css';
import sliderone from "../../../../src/assets/slider-image-one-removebg-preview.png"
import slidertwo from "../../../../src/assets/slidewr-image-two-assignment.png"
const Banner = () => {
  return (
    <div>
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={false}
      modules={[Navigation, Autoplay]}
      autoplay={{ delay: 3000 }}
      >
      <SwiperSlide>
        <div className='flex flex-1 sm:flex-col md:flex-row h-[70vh] bg-yellow-200'>
        <div className='md:w-1/2'>
            <div className='slider-content md:absolute top-[25%] left-[8rem] space-y-5'>
              <span className='md:text-5xl'>Bluetooth 4.1</span> <br />
              <span className='md:text-4xl'>& Wireless Headset</span>
              <p className='text-lg md:w-[50%]'>Iconic powerful bass resonance of Bluedio: Unexpected 57mm ultra-large dynamic drivers, turbine style housing, with iconic Bluedio surging low-frequency shock.</p>
              <button className='px-2 bg-red-700 text-center p-2 rounded-lg text-lg font-bold text-[#67b1b3]'>Shop Now</button>
            </div>
          </div>
          <div className='md:w-1/2'>
            <div className='w-full h-full flex items-center justify-center'>
              <img src="https://i.ibb.co/FXkS5VV/slider-image-one-removebg-preview.png" alt="" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='flex flex-1 sm:flex-col md:flex-row h-[70vh] bg-yellow-200'>
        <div className='md:w-1/2'>
            <div className='slider-content md:absolute top-[25%] left-[8rem] space-y-5'>
              <span className='md:text-5xl'>Win A Hitachi 49"</span> <br />
              <span className='md:text-4xl'>Class 1080p LED HDTV"</span>
              <p className='text-lg md:w-[50%]'>This Hitachi HDTV combines a stunning viewing experience with the amazing range of entertainment that only Roku offers. movies and TV episodes.</p>
              <button className='px-2 bg-red-700 text-center p-2 rounded-lg text-lg font-bold text-[#67b1b3]'>Shop Now</button>
            </div>
          </div>
          <div className='md:w-1/2'>
            <div className='w-full h-full flex items-center justify-center'>
              <img src="https://i.ibb.co/zPvb4Xj/slidewr-image-two-assignment.png" alt="" />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default Banner;
