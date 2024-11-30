import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const ImageView = ({ data }) => {
  return (
<Swiper
    // loop={data?.image?.length > 2}
    // autoplay={{
    //     delay: 2500,
    //     disableOnInteraction: false,
    // }}
    navigation={true}
    modules={[Autoplay, Navigation]}
    className="mySwiper select-none w-[800px] bg-white"
>
    {
        data?.image?.map((url, inx) => (
            <SwiperSlide key={inx}>
                <div>
                    <img className="w-full h-full object-contain" src={url} alt="" />
                </div>
            </SwiperSlide>
        ))
    }
</Swiper>

  );
};

export default ImageView;
