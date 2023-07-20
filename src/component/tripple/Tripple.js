import React from 'react';
import img from '../../assets/Group 370.png'
import './Tripple.css'

const Tripple = () => {
    return (
        <div className='lg:py-36 md:py-36 tripple'>
            <div className='pb-10'>
                <h3 className='lg:text-[16px] lg:font-[500] md:text-[16px] md:font-[500] text-center'>Founder Felix Velarde on the 2Y3X method</h3>
                <h1 className='lg:text-[68px] lg:font-[500] md:text-[68px] md:font-[500] text-center'>Two years to triple revenue. How we do it.</h1>
            </div>
            <div className='flex justify-center items-center'>
                <img src={img} alt="" />

            </div>
            <div className='flex justify-center items-center'>
                <button className='text-center text-[16px] font-[500] mt-10 primary-button text-[16px] font-[16px]'>Take the fast self assessment</button>
            </div>

        </div>
    );
};

export default Tripple;