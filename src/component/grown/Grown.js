import React from 'react';
import img1 from '../../assets/Bynd.png'
import img2 from '../../assets/Synthetic.png'
import img3 from '../../assets/Fish.png'
import img4 from '../../assets/Rawnet.png'
import img5 from '../../assets/Impero.png'
import img6 from '../../assets/White-Bear.png'
import img7 from '../../assets/Deeson.png'
import "../grown/Grown.css"

const Grown = () => {
    return (
        <div className='flex justify-center items-center py-36 main'>
            <div className='flex justify-center items-center grown'>
                <div className=''>
                    <h3 className='text-[16px] font-[500]'>Agencies we’ve levelled up</h3>
                    <h1 className='text-[60px] font-[700]'>Grown</h1>
                    <h1 className='text-[60px] font-[700]'>by 2Y3X</h1>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-10 four'>


                <div className='first'>
                    <div className='w-[210px] h-[210px] flex justify-center items-center grown-logo grown-over'>
                        <div className=''>
                            <div>
                                <img src={img1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='first'>
                    <div className='w-[210px] h-[210px] flex justify-center items-center grown-logo grown-over'>
                        <div className=''>
                            <div>
                                <img src={img2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='first'>
                    <div className='w-[210px] h-[210px] flex justify-center items-center grown-logo grown-over'>
                        <div className=''>
                            <div>
                                <img src={img3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='first'>
                    <div className='w-[210px] h-[210px] flex justify-center items-center grown-logo grown-over'>
                        <div className=''>
                            <div>
                                <img src={img4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='first'>
                    <div className='w-[210px] h-[210px] flex justify-center items-center grown-logo grown-over'>
                        <div className=''>
                            <div>
                                <img src={img5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='first'>
                    <div className='w-[210px] h-[210px] flex justify-center items-center grown-logo grown-over'>
                        <div className=''>
                            <div>
                                <img src={img6} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='first'>
                    <div className='w-[210px] h-[210px] flex justify-center items-center grown-logo grown-over'>
                        <div className=''>
                            <div>
                                <img src={img7} alt="" />
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </div >
    );
};

export default Grown;