import React, { useEffect, useState } from 'react';
import Wrapper from '../Wrapper';
import "../Banner/Banner.css"
import img1 from '../../assets/Clip path group.png'
import img2 from '../../assets/Component 2.png'
import { AiOutlineMenu } from 'react-icons/ai';

const Banner = () => {
    const [degree, setDegree] = useState(`0deg`)
    useEffect(() => {
        const updateGradientRotation = () => {
            const dynamicValue = (Date.now() / 5000) % 1;
            setDegree(`${dynamicValue * 360}deg`)
            requestAnimationFrame(updateGradientRotation);
        };

        updateGradientRotation();
    }, []);

    const gradientStyle = {
        background: `conic-gradient(from ${degree} at 50% 50%, #fff 0deg, #fff9ea 108.75000357627869deg, #ffb800 360deg)`,
    };

    return (
        <div style={gradientStyle}>
            <div className='layer-bg'>


                <div className='flex justify-between'>
                    <div className='pl-10 pt-3'>
                        <img src={img1} alt="" />
                    </div>
                    <nav>
                        <input type="checkbox" name="" id="check"></input>
                        <label for="check" class="checkBtn">
                            <AiOutlineMenu className='text-3xl mt-8'></AiOutlineMenu>
                        </label>

                        <ul>
                            <li><a class="active" href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Portfolio</a></li>
                            <li><a href="">Contact</a></li>

                        </ul>
                    </nav>
                </div>
                <div className="h-screen  flex justify-center items-center content">
                    <Wrapper >
                        <div className="flex flex-col items-center justify-center">
                            <h3 className='lg:font-[700] lg:text-[16px] md:font-[700] md:text-[16px]'>It’s time for 2Y3X</h3>
                            <h1 className='lg:text-[80px] lg:font-[900] md:text-[80px] md:font-[900] text-center'>Triple your revenue <br /> in two years
                            </h1>
                            <h3 className="text-center lg:text-black md:text-center md:text-black  text-[20px] font-[400] mt-5">
                                Acceleration programme and one-off workshops to <br />scale your business at speed.
                            </h3>
                            <button className='text-center text-[16px] font-[500] mt-10 primary-button'>Take the fast self assessment</button>

                        </div>
                    </Wrapper>



                </div >
            </div>
        </div>
    );
};

export default Banner;