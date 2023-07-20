import React from 'react';
import './Deason.css';
import img1 from '../../assets/Deeson.jpg';
import img2 from '../../assets/Rectangle 19.jpg';

const Deason = () => {
    return (
        <div className='deason'>
            <div className='lg:flex lg:justify-between md:flex md:justify-between deason-content'>
                <div className='flex justify-center items-center lg:w-[1000px] md:w-[1000px] lg:pl-10 md:pl-10'>
                    <div>
                        <h3 className='lg:text-[16px] lg:font-[600] md:text-[16px] md:font-[600]'>What our clients say</h3>
                        <h1 className='lg:text-[40px] lg:font-[500] md:text-[40px] md:font-[500] lg:py-12 md:py-12'>“Their leadership and challenge really helped us set us up for growth and a subsequent exit. I’d thoroughly recommend working with them and would love the opportunity to work with them again in the future.”</h1>
                        <h2 className='text-[20px] font-[600] pb-5'>Simon Wakeman | Managing director</h2>
                        <h1 className='text-[40px] font-[800]'>deeson\</h1>
                    </div>
                </div>
                <div>
                    <img className='lg:w-[595px] lg:h-[744px] md:w-[595px] md:h-[744px] con-img ' src={img2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Deason;