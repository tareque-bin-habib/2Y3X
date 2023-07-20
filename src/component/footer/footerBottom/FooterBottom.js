import React from 'react';
import '../Footer.css'
import img from '../../../assets/good-business-charter 1.png'

const FooterBottom = () => {
    return (
        <div className='bottomBanner flex justify-between items-center'>
            <div className='pl-36'>
                <h2 className='text-[16px] font-[400] text-white'>Terms   Privacy Policy</h2>
                <h2 className='text-[16px] font-[400] text-white'>© 2022 All rights reserved. 2Y3X , QuickMap , and Earnout Maximiser® are Registered Trade Marks</h2>
            </div>
            <div className='pr-36'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default FooterBottom;