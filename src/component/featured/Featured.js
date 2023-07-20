import React from 'react';
import img from '../../assets/Group 367.png'
import './Featured.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

const Featured = () => {
    return (

        <div className='lg:pt-36 md:pt-36 sm:pt-10'>
            <div className='flex justify-between items-center slide py-20'>
                <div className='pl-10'>
                    <h3 className='text-[16px] font-[700]'>Our Views</h3>
                    <h1 className='text-[68px] font-[700]'>Featured Insights</h1>
                </div>
                <div className='pr-10'>
                    <img src={img} alt="" />
                </div>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={100}
                freeMode={true}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <div className='lg:pl-10 md:pl-10 pt-14 lg:flex lg:justify-between lg:items-center md:flex md:justify-between'>

                    <SwiperSlide className='mr-[400px]'>
                        <div className='lg:w-[785px] px-[40px] lg:h-[824px] card'>
                            <div className='img-back'>

                            </div>
                            <div className='py-4'>
                                <h3 className='text-[16px] font-[400] text-[#BDBDBD] pb-3'>Content tag here</h3>
                                <h1 className='text-[25px] font-[600] pb-3'>Title for featured story will go here across <br /> two lines if needed</h1>
                                <p className='text-[19px] font-[400]'>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, <br /> dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem <br />sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit,<br /> sit amet feugiat lectus. Class </p>
                                <button className='text-[16px] font-[500] mt-3'>Read more</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-[785px] h-[824px] lg:pr-10 md:pr-10 card'>
                            <div className='img-another'>

                            </div>
                            <div className='py-4'>
                                <h3 className='text-[16px] font-[400] text-[#BDBDBD] pb-3'>Content tag here</h3>
                                <h1 className='text-[25px] font-[600] pb-3'>Title for featured story will go here across <br /> two lines if needed</h1>
                                <p className='text-[19px] font-[400]'>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, <br /> dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem <br />sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit,<br /> sit amet feugiat lectus. Class </p>
                                <button className='text-[16px] font-[500] mt-3'>Read more</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-[785px] h-[824px] lg:pr-10 md:pr-10 card'>
                            <div className='img-back'>

                            </div>
                            <div className='py-4'>
                                <h3 className='text-[16px] font-[400] text-[#BDBDBD] pb-3'>Content tag here</h3>
                                <h1 className='text-[25px] font-[600] pb-3'>Title for featured story will go here across <br /> two lines if needed</h1>
                                <p className='text-[19px] font-[400]'>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, <br /> dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem <br />sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit,<br /> sit amet feugiat lectus. Class </p>
                                <button className='text-[16px] font-[500] mt-3'>Read more</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-[785px] h-[824px] lg:pr-10 md:pr-10 card'>
                            <div className='img-another'>

                            </div>
                            <div className='py-4'>
                                <h3 className='text-[16px] font-[400] text-[#BDBDBD] pb-3'>Content tag here</h3>
                                <h1 className='text-[25px] font-[600] pb-3'>Title for featured story will go here across <br /> two lines if needed</h1>
                                <p className='text-[19px] font-[400]'>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, <br /> dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem <br />sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit,<br /> sit amet feugiat lectus. Class </p>
                                <button className='text-[16px] font-[500] mt-3'>Read more</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-[785px] h-[824px] lg:pr-10 md:pr-10 card'>
                            <div className='img-back'>

                            </div>
                            <div className='py-4'>
                                <h3 className='text-[16px] font-[400] text-[#BDBDBD] pb-3'>Content tag here</h3>
                                <h1 className='text-[25px] font-[600] pb-3'>Title for featured story will go here across <br /> two lines if needed</h1>
                                <p className='text-[19px] font-[400]'>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, <br /> dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem <br />sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit,<br /> sit amet feugiat lectus. Class </p>
                                <button className='text-[16px] font-[500] mt-3'>Read more</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper >
            <div className='lg:flex lg:justify-center md:flex md:justify-center slide-see'>
                <button className='text-center text-[16px] font-[500] mt-10 primary-button text-[16px] font-[16px]'>See more</button>
            </div>
        </div>

    );
};

export default Featured;