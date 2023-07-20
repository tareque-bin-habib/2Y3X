import React from 'react';
import './Result.css'
import img1 from '../../assets/Ellipse 22.png'
import img2 from '../../assets/Ellipse 23.png'
import { AiTwotoneStar } from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Result = () => {
    return (
        <div className='py-36'>
            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <div className='result flex justify-around result-new'>
                    <div className='one'>
                        <SwiperSlide className=''>
                            <div className='flex justify-center items-center'>
                                <div className='head'>
                                    <h3 className='text-[16px] font-[700]'>Making Change</h3>
                                    <h1 className='text-[80px] font-[700]'>Consistent
                                        <br />results</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                    <div className='flex justify-center items-center ind'>
                        <SwiperSlide>
                            <div className='review mr-10 flex justify-center items-center  '>
                                <div className='p-5 overlay'>
                                    <div className='flex'>
                                        <AiTwotoneStar className='text-amber-500 start'></AiTwotoneStar>
                                        <AiTwotoneStar className='text-amber-500 start'></AiTwotoneStar>
                                        <AiTwotoneStar className='text-amber-500 start'></AiTwotoneStar>
                                        <AiTwotoneStar className='text-amber-500 start'></AiTwotoneStar>
                                        <AiTwotoneStar className='text-amber-500 start'></AiTwotoneStar>
                                    </div>
                                    <h1 className='text-[26px] font-[500]'>Focus on what really matters</h1>
                                    <p className='text-[20] font-[400] pb-14'>“Brilliant at getting management to focus on what really matters – and getting us to let go of things that are not contributing to our strategic aims.”</p>
                                    <div className='flex logo'>
                                        <div className='pr-5'>
                                            <img src={img1} alt="" />
                                        </div>
                                        <div>
                                            <h3 className='text-[14px] font-[700]'>Fred Moore</h3>
                                            <h4 className='text-[13px] font-[500]'>COO, Matter Of Form</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='review mr-10 flex justify-center items-center '>
                                <div className='p-5 head overlay'>
                                    <div className='flex'>
                                        <AiTwotoneStar className='text-amber-500 start'></AiTwotoneStar>
                                        <AiTwotoneStar className='text-amber-500 start'></AiTwotoneStar>
                                        <AiTwotoneStar className='text-amber-500 start'></AiTwotoneStar>
                                        <AiTwotoneStar className='text-amber-500 start'></AiTwotoneStar>
                                        <AiTwotoneStar className='text-amber-500 start'></AiTwotoneStar>
                                    </div>
                                    <h1 className='text-[26px] font-[500]'>Focus on what really matters</h1>
                                    <p className='text-[20] font-[400] pb-14'>“Brilliant at getting management to focus on what really matters – and getting us to let go of things that are not contributing to our strategic aims.”</p>
                                    <div className='flex'>
                                        <div className='pr-5'>
                                            <img src={img2} alt="" />
                                        </div>
                                        <div>
                                            <h3 className='text-[14px] font-[700]'>Kalley Mackhenzie</h3>
                                            <h4 className='text-[13px] font-[500]'>Founder, White Beer</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='review mr-10 flex justify-center items-center '>
                                <div className='p-5 head overlay'>
                                    <div className='flex'>
                                        <AiTwotoneStar className='text-amber-500 start'></AiTwotoneStar>
                                        <AiTwotoneStar className='text-amber-500 start'></AiTwotoneStar>
                                        <AiTwotoneStar className='text-amber-500 start'></AiTwotoneStar>
                                        <AiTwotoneStar className='text-amber-500 start'></AiTwotoneStar>
                                        <AiTwotoneStar className='text-amber-500 start'></AiTwotoneStar>
                                    </div>
                                    <h1 className='text-[26px] font-[500]'>Focus on what really matters</h1>
                                    <p className='text-[20] font-[400] pb-14'>“Brilliant at getting management to focus on what really matters – and getting us to let go of things that are not contributing to our strategic aims.”</p>
                                    <div className='flex'>
                                        <div className='pr-5'>
                                            <img src={img2} alt="" />
                                        </div>
                                        <div>
                                            <h3 className='text-[14px] font-[700]'>Kalley Mackhenzie</h3>
                                            <h4 className='text-[13px] font-[500]'>Founder, White Beer</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='review mr-10 flex justify-center items-center '>
                                <div className='p-5 head overlay'>
                                    <div className='flex'>
                                        <AiTwotoneStar className='text-amber-500 start'></AiTwotoneStar>
                                        <AiTwotoneStar className='text-amber-500 start'></AiTwotoneStar>
                                        <AiTwotoneStar className='text-amber-500 start'></AiTwotoneStar>
                                        <AiTwotoneStar className='text-amber-500 start'></AiTwotoneStar>
                                        <AiTwotoneStar className='text-amber-500 start'></AiTwotoneStar>
                                    </div>
                                    <h1 className='text-[26px] font-[500]'>Focus on what really matters</h1>
                                    <p className='text-[20] font-[400] pb-14'>“Brilliant at getting management to focus on what really matters – and getting us to let go of things that are not contributing to our strategic aims.”</p>
                                    <div className='flex'>
                                        <div className='pr-5'>
                                            <img src={img2} alt="" />
                                        </div>
                                        <div>
                                            <h3 className='text-[14px] font-[700]'>Kalley Mackhenzie</h3>
                                            <h4 className='text-[13px] font-[500]'>Founder, White Beer</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </div>

                </div>
            </Swiper>
        </div>
    );
};

export default Result;