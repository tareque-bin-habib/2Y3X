import React from 'react';
import '../Footer.css'
import img1 from '../../../assets/good-business-charter 1.png'


const FooterTop = () => {
    return (
        <div className='mainBanner'>
            <div className='footerLayer'>
                <div className='pl-[200px] pt-10'>
                    <img src={img1} alt="" />
                </div>
                <div className='flex justify-around items-center res-banner pt-36'>
                    <div >
                        <h3 className='text-[20px] font-[500] text-white pb-8'>Contacts</h3>
                        <h4 className='text-[18px] font-[400] text-white pb-8'>UK & Europe         info@2y3x.com</h4>
                        <h4 className='text-[18px] font-[400] text-white '>USA & Canada    naw@2y3x.com</h4>
                    </div>
                    <div className='footer-content'>
                        <h3 className='text-[20px] font-[500] text-white pb-8'>2Y3X Programme</h3>
                        <h3 className='text-[18px] font-[400] text-white pb-8'>Events</h3>
                        <h3 className='text-[18px] font-[400] text-white pb-8'>Insights & Media</h3>
                        <h3 className='text-[18px] font-[400] text-white pb-8'>Meet the team</h3>
                        <h3 className='text-[18px] font-[400] text-white'>Contact</h3>
                    </div>
                    <div className='w-[325px] h-[269px] bg-zinc-900 flex justify-center items-center'>
                        <div>
                            <h2 className='text-[20px] font-[400] text-white text-center pb-5'>Scale at speed</h2>
                            <h3 className='text-[16px] font-[400] text-white text-center'>This is a how-to guide, matching theory with easily actionable steps.</h3>
                            <div className='flex justify-center'>
                                <button className='text-center text-[16px] font-[500] mt-10 text-white footer-button '>Buy the Book</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div >
    );
};

export default FooterTop;