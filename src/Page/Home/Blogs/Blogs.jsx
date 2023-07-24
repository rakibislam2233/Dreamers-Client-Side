// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import {Pagination } from 'swiper/modules';
import { AiFillHeart, AiOutlineLink } from "react-icons/ai";
import { BiSolidShareAlt } from "react-icons/bi";
import Container from "../../Shared/Container/Container";
const Blogs = () => {
  return (
    <div className="w-full py-10">
      <Container>
        <h2 className="text-3xl font-semibold text-center">Blogs</h2>
        <div className="pt-10">
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // When window width is >= 480px
              480: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // When window width is >= 768px
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="w-full h-full border rounded-2xl space-y-3 cursor-pointer">
                <img
                  className="w-full h-64 rounded-2xl"
                  src="https://i.postimg.cc/QCyKwJzh/img1.jpg"
                  alt=""
                />
                <div className="px-5 py-8">
                  <h3 className="text-xl font-semibold">
                  Annual Cultural Fest Events Program.
                  </h3>
                  <div className="flex justify-between  font-medium pt-5">
                    <div className="flex gap-3 items-baseline text-xl">
                      <AiFillHeart className="hover:text-rose-500"></AiFillHeart>
                      <AiOutlineLink></AiOutlineLink>
                      <BiSolidShareAlt></BiSolidShareAlt>
                    </div>
                    <h2>24.8.2023</h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full border rounded-2xl space-y-3 cursor-pointer">
                <img
                  className="w-full h-64 rounded-2xl"
                  src="https://i.postimg.cc/rsmtfPQf/USASEF16-0741.jpg"
                  alt=""
                />
                <div className="px-5 py-8">
                  <h3 className="text-xl font-semibold">
                  Science Exhibition Event Program
                  </h3>
                  <div className="flex justify-between  font-medium pt-5">
                    <div className="flex gap-3 items-baseline text-xl">
                      <AiFillHeart className="hover:text-rose-500"></AiFillHeart>
                      <AiOutlineLink></AiOutlineLink>
                      <BiSolidShareAlt></BiSolidShareAlt>
                    </div>
                    <h2>23.8.2023</h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full border rounded-2xl space-y-3 cursor-pointer">
                <img
                  className="w-full h-64 rounded-2xl"
                  src="https://i.postimg.cc/SsXn8MsP/img2.jpg"
                  alt=""
                />
                <div className="px-5 py-8">
                  <h3 className="text-xl font-semibold">
                   Sport Realated Blogs
                  </h3>
                  <div className="flex justify-between  font-medium pt-5">
                    <div className="flex gap-3 items-baseline text-xl">
                      <AiFillHeart className="hover:text-rose-500"></AiFillHeart>
                      <AiOutlineLink></AiOutlineLink>
                      <BiSolidShareAlt></BiSolidShareAlt>
                    </div>
                    <h2>22.8.2023</h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full border rounded-2xl space-y-3 cursor-pointer">
                <img
                  className="w-full h-64 rounded-2xl"
                  src="https://i.postimg.cc/zf2LVjJW/footbal.jpg"
                  alt=""
                />
                <div className="px-5 py-8">
                  <h3 className="text-xl font-semibold">
                    Footbal Playing 
                  </h3>
                  <div className="flex justify-between  font-medium pt-5">
                    <div className="flex gap-3 items-baseline text-xl">
                      <AiFillHeart className="hover:text-rose-500"></AiFillHeart>
                      <AiOutlineLink></AiOutlineLink>
                      <BiSolidShareAlt></BiSolidShareAlt>
                    </div>
                    <h2>29.6.2023</h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full border rounded-2xl space-y-3 cursor-pointer">
                <img
                  className="w-full h-64 rounded-2xl"
                  src="https://i.postimg.cc/QCyKwJzh/img1.jpg"
                  alt=""
                />
                <div className="px-5 py-8">
                  <h3 className="text-xl font-semibold">
                  Annual Cultural Fest Events Program.
                  </h3>
                  <div className="flex justify-between  font-medium pt-5">
                    <div className="flex gap-3 items-baseline text-xl">
                      <AiFillHeart className="hover:text-rose-500"></AiFillHeart>
                      <AiOutlineLink></AiOutlineLink>
                      <BiSolidShareAlt></BiSolidShareAlt>
                    </div>
                    <h2>24.8.2023</h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full border rounded-2xl space-y-3 cursor-pointer">
                <img
                  className="w-full h-64 rounded-2xl"
                  src="https://i.postimg.cc/rsmtfPQf/USASEF16-0741.jpg"
                  alt=""
                />
                <div className="px-5 py-8">
                  <h3 className="text-xl font-semibold">
                  Science Exhibition Event Program
                  </h3>
                  <div className="flex justify-between  font-medium pt-5">
                    <div className="flex gap-3 items-baseline text-xl">
                      <AiFillHeart className="hover:text-rose-500"></AiFillHeart>
                      <AiOutlineLink></AiOutlineLink>
                      <BiSolidShareAlt></BiSolidShareAlt>
                    </div>
                    <h2>23.8.2023</h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
