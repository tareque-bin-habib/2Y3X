import React from 'react';
import './StreangthBanner.css'
import img from '../../assets/Clock.png'

const SteangthBanner = () => {
    return (
        <div className='black'>
            <div className='layer flex justify-center items-center'>
                <div>
                    <div className='flex justify-center'>
                        <img src={img} alt="" />
                    </div>
                    <h1 className='lg:text-[68px] lg:font-[500] md:text-[68px] md:font-[500] text-white text-center'>Identify your strengths <br /> and weaknesses in <br /> under four minutes</h1>
                    <div className='flex justify-center'>
                        <button className='text-center text-[16px] font-[500] mt-10 text-white hindside-button '>Take the fast self assessment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SteangthBanner;