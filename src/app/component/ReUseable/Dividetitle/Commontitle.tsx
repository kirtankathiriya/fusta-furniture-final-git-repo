import React from 'react'

type Props = {
    title : string,
    subtitle : string
}

const CommonTitle = ({title,subtitle}: Props) => {
    return (
        <div className='text-center w-screen mb-7'>
            <h1 className='text-2xl w-screen mb-5 md:text-4xl font-medium'>{title}</h1>
            <p className='text-base '>{subtitle}</p>
        </div>
    )
}

export default CommonTitle