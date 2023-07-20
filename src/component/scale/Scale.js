import React from 'react';
import img from '../../assets/Rectangle 82.png'
import './Scale.css'

const Scale = () => {
    return (
        <div className='py-36 flex justify-around scale'>
            <div>
                <h3 className='text-[16px] font-[700]'>The theory</h3>
                <h1 className='text-[80px] font-[700]'>Scale
                    <br />at speed</h1>
                <h3 className='text-[30px] font-[500]'>Our programmes are based on the book <br /> Scale at Speed by 2Y3X Felix Velarde, <br /> which translates the best business <br /> theory into easy actionable steps.</h3>
            </div>
            <div className='scalLogo'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Scale;