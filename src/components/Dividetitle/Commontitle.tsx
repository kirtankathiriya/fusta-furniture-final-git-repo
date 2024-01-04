import React from 'react'

type Props = {
    title : string,
    subtitle : string
}

const CommonTitle = ({title,subtitle}: Props) => {
    return (
        <div className='text-center mb-7'>
            <h1 className='text-2xl mb-5 md:text-4xl font-medium'>{title}</h1>
            <h3 className='text-base'>{subtitle}</h3>
        </div>
    )
}

export default CommonTitle