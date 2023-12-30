import React from 'react'
import I1 from '../../../../public/Partner/partner1.jpg'
import I2 from '../../../../public/Partner/partner2.jpg'
import I3 from '../../../../public/Partner/p3.jpg'
import I4 from '../../../../public/Partner/p4.jpg'
import I5 from '../../../../public/Partner/p5.jpg'
import Image from 'next/image'
type Props = {}

const Patner = (props: Props) => {
    return (
        <div className='grid justify-evenly grid-cols-2 md:grid-cols-5 items-center pb-[100px] pt-[100px] ml-10'>
            <div>
                < Image src={I1} alt='1' />
            </div>
            <div>          
                < Image src={I2} alt='1' />
            </div>
            <div>
                < Image src={I3} alt='1' />
            </div>
            <div>           
                < Image src={I4} alt='1' />
            </div>
            <div className=' hidden md:block'>    
                < Image src={I5} alt='1' />
            </div>
        </div>

    )
}

export default Patner



