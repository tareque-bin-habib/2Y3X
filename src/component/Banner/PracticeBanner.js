import React from 'react';

const PracticeBanner = () => {
    return (
        <div>
            <div className="mainBanner  relative"></div>
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center flex-col p-5 sm:p-10">
                <h1 className="text-center text-[40px] md:text-[60px] font-[900] leading-[40px] md:leading-[60px]">
                    Learn Design and Develop
                    <br /> Custom <span className="text-[#85171a]">
                        web projects
                    </span>{" "}
                    <br />
                    across platfroms and industirs.
                </h1>
                <p className="mt-5 text-center">
                    We provide many services like Ecommerce, Accountant, HRM, CRM, Blog,
                    Storage, Api, Easy learning for student, Database. <br /> Build a
                    strong reputation as a reliable and trustworthy service provider in
                    the industry.
                </p>
            </div>
        </div>

    );
};

export default PracticeBanner;