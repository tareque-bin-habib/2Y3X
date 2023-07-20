import React from 'react';
import './HindSideBanner.css'

const HindSideBanner = () => {
    return (
        <div className='hindside lg:flex lg:justify-end md:flex md:justify-end items-center mainContent'>
            <div className='pr-48 mainContent'>
                <div className='problem'>
                    <div>
                        <h3 className='lg:text-[16px] lg:font-[700] md:text-[16px] md:font-[700] text-white'>Getting Started</h3>
                        <h1 className='lg:text-[80px] lg:font-[800] md:text-[80px] md:font-[800] text-white'>Free hindsight</h1>
                        <h2 className='text-white lg:text-[30px md:text-[30px] font-[500]'>How do you grow from £2m to £10m? <br />From 30 to 100 staff? From ownership to exit?<br /> <br />
                            The 2Y3X  framework provides a clear how to,<br /> while our industry experience provides the <br /> invaluable done that. <br /><br />
                            We’ve got to the top and want to help next <br /> generation get there too. A chat with our growth <br />specialists will help you step back, take stock,<br /> and chart your next move.</h2>
                        <div className='hideside-button'>
                            <button className='text-center text-[16px] font-[500] mt-10 text-white hindside-button '>Take the fast self assessment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HindSideBanner;