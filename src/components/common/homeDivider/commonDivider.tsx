import React from 'react';
import pictureCommon from '/public/icon/commonHome.jpg';

type Props = {
    Name: string;
}

const CommonDivider = ({ Name }: Props) => {
    const divStyle = {
        backgroundImage: `url(${pictureCommon.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '250px',
    };

    return (
        <div className="relative my-5">
            <div className="w-full" style={divStyle}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h2 className="text-black text-2xl font-bold tracking-widest">{Name}</h2>
                <div className='flex flex-row'>
                    <h4 className='hover:text-orange-500'><a href="http://localhost:3000/">Home</a></h4>
                    <p className='mr-2 ml-2'>/</p>
                    <h4><a href="#">{Name}</a></h4>
                </div>
            </div>
        </div>
    )
}

export default CommonDivider;
