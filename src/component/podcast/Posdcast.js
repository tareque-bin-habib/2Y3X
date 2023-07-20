import React from 'react';
import img1 from '../../assets/Rectangle 41.png'
import img2 from '../../assets/Rectangle 42.png'
import img3 from '../../assets/Rectangle 43.png'
import img4 from '../../assets/Audio Wave.png'
import img5 from '../../assets/Vector.png'
import './Podcast.css'

const Posdcast = () => {
    return (
        <div className='pt-36 mini'>
            <div>
                <h3 className='text-[16px] font-[700] text-center pb-3'>Listen in</h3>
                <h1 className='text-[68px] font-[500] text-center'>Featured Podcasts</h1>
            </div>
            <div className='pt-20'>
                <div className='flex items-center justify-center pb-20 pod'>
                    <div>
                        <img src={img1} alt="" />
                    </div>
                    <div className='pl-10'>
                        <div className='flex items-center  pb-3'>
                            <div className='pr-5'>
                                <img src={img4} alt="" />
                            </div>
                            <div>
                                <h1 className='text-[40px] font-[500] pod-con'>Title for podcast will go here across a line here</h1>
                            </div>
                        </div>
                        <div className='flex justify-center items-center sound bg-gray-200 w-[983px] h-[29px] rounded-[53px] pl-10'>
                            <div className='pr-2'>
                                <img src={img5} alt="" />
                            </div>
                            <div className='pr-2'>
                                <h3>00:00</h3>
                            </div>
                            <div className='w-[861px] h-[1px] bg-slate-400'>

                            </div>

                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center pb-20 pod'>
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    <div className='pl-10'>
                        <div className='flex items-center pb-3'>
                            <div className='pr-5'>
                                <img src={img4} alt="" />
                            </div>
                            <div>
                                <h1 className='text-[40px] font-[500] pod-con'>Title for podcast will go here across a line here</h1>
                            </div>
                        </div>
                        <div className='flex justify-center items-center sound bg-gray-200 w-[983px] h-[29px] rounded-[53px] pl-10'>
                            <div className='pr-2'>
                                <img src={img5} alt="" />
                            </div>
                            <div className='pr-2'>
                                <h3>00:00</h3>
                            </div>
                            <div className='w-[861px] h-[1px] bg-slate-400'>

                            </div>

                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center pb-20 pod'>
                    <div>
                        <img src={img3} alt="" />
                    </div>
                    <div className='pl-10'>
                        <div className='flex items-center pb-3'>
                            <div className='pr-5'>
                                <img src={img4} alt="" />
                            </div>
                            <div>
                                <h1 className='text-[40px] font-[500] pod-con'>Title for podcast will go here across a line here</h1>
                            </div>
                        </div>
                        <div className='flex justify-center items-center sound bg-gray-200 w-[983px] h-[29px] rounded-[53px] pl-10'>
                            <div className='pr-2'>
                                <img src={img5} alt="" />
                            </div>
                            <div className='pr-2'>
                                <h3>00:00</h3>
                            </div>
                            <div className='w-[861px] h-[1px] bg-slate-400'>

                            </div>

                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='text-center text-[16px] font-[500] mt-10 primary-button'>See more</button>
                </div>
            </div>
        </div >
    );
};

export default Posdcast;