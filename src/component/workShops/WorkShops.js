import React from 'react';
import img1 from '../../assets/Group 340.png'
import img2 from '../../assets/Group 297.png'
import img3 from '../../assets/Group.png'
import './Workshop.css'

const WorkShops = () => {
    return (
        <div className='py-28'>
            <div className='content-text'>
                <h3 className='text-center text-[16px] font-[500]'>Start your 2Y3X journey</h3>
                <h1 className='text-center text-[68px] font-[700]'>Our programmes and workshops</h1>
            </div>
            <div className='flex justify-around main-content'>
                <div className='work'>
                    <div className=' w-[400px] px-[40px] py-[50px] content-head over'>
                        <h1 className='text-[30px] font-[500] text-center py-24'>Strategy Map</h1>
                        <div className='flex justify-center items-center'>
                            <div>
                                <div className='flex justify-center items-center'>
                                    <img className='' src={img1} alt="" />
                                </div>
                                <p className='text-[16px] font-[500] py-11 text-center leading-relaxed'>Designed for companies that understand the value in defining a clear strategy.We help you do this, quickly.</p>
                                <div className='flex justify-center items-center'>
                                    <button className='text-center text-[16px] font-[500] mt-10 primary-button'>Set up a no strings call</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='work'>
                    <div className=' w-[400px] px-[40px] py-[50px] content-head over'>
                        <h1 className='text-[30px] font-[500] text-center py-24'>QuickMap</h1>
                        <div className='flex justify-center items-center'>
                            <div>
                                <div className='flex justify-center items-center'>
                                    <img className='' src={img2} alt="" />
                                </div>
                                <p className='text-[16px] font-[500] py-11 text-center leading-relaxed'>The 2Y3X QuickMap® program is for businesses that need to reboot or quickly pivot to new opportunity.</p>
                                <div className='flex justify-center items-center'>
                                    <button className='text-center text-[16px] font-[500] mt-10 primary-button'>Set up a no strings call</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='work'>
                    <div className=' w-[400px] px-[40px] py-[50px] content-head over'>
                        <h1 className='text-[30px] font-[500] text-center py-24'>Proposition Development</h1>
                        <div className='flex justify-center items-center'>
                            <div>
                                <div className='flex justify-center items-center'>
                                    <img className='' src={img3} alt="" />
                                </div>
                                <p className='text-[16px] font-[500] py-11 text-center leading-relaxed'>A tight & clearly-articulated value proposition focuses your team & signals to the right clients that you are the only fit for them.</p>
                                <div className='flex justify-center items-center'>
                                    <button className='text-center text-[16px] font-[500] mt-10 primary-button'>Set up a no strings call</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkShops;