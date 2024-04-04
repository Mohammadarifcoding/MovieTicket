import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-[1600px] mx-auto lg:px-4 md:px-4 px-3'>
            {children}
        </div>
    );
};

export default Container;