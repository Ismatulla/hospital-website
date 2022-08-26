import React from 'react';
import SingleFooter from './SingleFooter';
function Footer(props) {


    return (
        <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center justify-center pb-24 pt-20 bg-cyan-500 sm:gap-y-8'>
            <SingleFooter />
        </div>
    );
}

export default Footer;