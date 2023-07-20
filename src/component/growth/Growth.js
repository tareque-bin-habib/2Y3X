import React from 'react';
import './Growth.css'
import img1 from '../../assets/Rectangle 40.png'
import img2 from '../../assets/Rectangle 51.png'
import img3 from '../../assets/Rectangle 52.png'
import { AiOutlineLinkedin } from 'react-icons/ai';
import './Growth.css'

const Growth = () => {
    return (
        <div className='py-36 growth '>
            <div className='flex justify-center growth-con'>
                <div>
                    <div className='w-[645px] h-[500px]'>
                        <h3 className='text-[16px] font-[500] pl-12'>Builders and Leaders</h3>
                        <h1 className='text-[80px] font-[700] pl-12 pb-3'>Growth <br /> acceleration <br /> specialists</h1>
                        <h3 className='text-[20px] font-[400] pl-12'>We’ve been there so you can do that</h3>
                    </div>

                    <div className='w-[645px] h-[680px]'>
                        <div className='flex justify-center'>
                            <img src={img2} alt="" />
                        </div>
                        <div>
                            <h1 className='text-[40px] font-[700] pl-12 pt-4'>Felix Velarde</h1>
                            <h3 className='text-[20px] font-[400] pl-12'>Founder</h3>
                            <div className='linkdin'>
                                <AiOutlineLinkedin className='text-[25px] pl-12 '></AiOutlineLinkedin>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='text-center text-[16px] font-[500] ml-12 mt-10 primary-button'>Meet the team</button>
                    </div>

                </div>

                <div>
                    <div className='flex items-center'>
                        <div className='w-[645px] h-[750px] '>
                            <div className='flex justify-center'>
                                <img src={img1} alt="" />
                            </div>
                            <div>
                                <h1 className='text-[40px] font-[700] ml-24 pt-4'>Felix Velarde</h1>
                                <h3 className='text-[20px] font-[400]  ml-24'>Founder</h3>
                                <AiOutlineLinkedin className='text-[25px] ml-24 linkdin'></AiOutlineLinkedin>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='w-[645px] h-[700] '>
                            <div className='flex justify-center'>
                                <img src={img3} alt="" />
                            </div>
                            <div>
                                <h1 className='text-[40px] font-[700] pt-4  ml-24'>Felix Velarde</h1>
                                <h3 className='text-[20px] font-[400]  ml-24'>Founder</h3>
                                <AiOutlineLinkedin className='text-[25px]  ml-24 linkdin'></AiOutlineLinkedin>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div >
    );
};

export default Growth;