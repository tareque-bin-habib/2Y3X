import React from 'react';
import Banner from '../../component/Banner/Banner';
import Grown from '../../component/grown/Grown';
import Deason from '../../component/deason/Deason';
import WorkShops from '../../component/workShops/WorkShops';
import Result from '../../component/result/Result';
import Scale from '../../component/scale/Scale';
import Posdcast from '../../component/podcast/Posdcast';
import HindSideBanner from '../../component/hindsideBanner/HindSideBanner';
import SteangthBanner from '../../component/streangthBanner/SteangthBanner';
import Footer from '../../component/footer/Footer';
import Featured from '../../component/featured/Featured';
import Tripple from '../../component/tripple/Tripple';
import Growth from '../../component/growth/Growth';
import PracticeBanner from '../../component/Banner/PracticeBanner';


const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Grown></Grown>
            <HindSideBanner></HindSideBanner>
            <Tripple></Tripple>
            <Deason></Deason>
            <WorkShops></WorkShops>
            <Result></Result>
            <SteangthBanner></SteangthBanner>
            <Growth></Growth>
            <Featured></Featured>
            <Posdcast></Posdcast>
            <Scale></Scale>
            <Footer></Footer>


        </div>
    );
};

export default HomePage;