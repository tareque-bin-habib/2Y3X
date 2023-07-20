import React from 'react';

const BgWrapper = ({ children, className }) => {
    return (
        <div
            className={`w-full max-w-[1580px]${className || ""
                }`}
        >
            {children}
        </div>
    );
};

export default BgWrapper;