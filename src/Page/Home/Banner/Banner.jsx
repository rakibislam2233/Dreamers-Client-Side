// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const images = [
  {
    image: "https://i.postimg.cc/tR3YQJ5H/College-Admissions-Trends-2020-2021-scaled.jpg",
  },
  {
    image: "https://i.postimg.cc/zG6KJkdc/entrepreneurs-meeting-office.jpg",
  },
  {
    image: "https://i.postimg.cc/wM19TD4w/free-time-students-bachelor-s-campus-life-rhythm-five-friendly-students-are-walking.jpg",
  },
  {
    image: "https://i.postimg.cc/6qcCtJSr/low-angle-cheerful-team-students-passed-test-by-preparing-all-together.jpg",
  }
  ,
  {
    image: "https://i.postimg.cc/7YTqFM26/group-students-posing-table.jpg"
  }
];
const Banner = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-[#FBE6E5] to-[#DDECFF]">
      <Swiper className="mySwiper w-full h-full">
        {images.map((image) => (
          <>
            {" "}
            <SwiperSlide>
              <div
                style={{
                  backgroundImage: `url(${image.image})`,
                  backgroundPosition: "top center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundBlendMode: "multiply",
                }}
                className={`w-full h-screen cursor-pointer`}
              >
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;

/**
https://i.postimg.cc/tCP6zm7p/rahi1.jpg
https://i.postimg.cc/jS6v5jbV/emran2.jpg
https://i.postimg.cc/rybfZbJH/emran7.jpg

*/
