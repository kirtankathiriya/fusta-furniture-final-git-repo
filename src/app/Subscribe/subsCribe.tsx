import Image from 'next/image'
import React from 'react'
import i1 from '../../../public/subscribePhoto/image1.jpg'
import i2 from '../../../public/subscribePhoto/image2.jpg'
import CommonTitle from '../component/ReUseable/Dividetitle/Commontitle'
import ButtonCommon from '../component/ReUseable/Button/button'

type Props = {}

const SubsCribePage = (props: Props) => {
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 md:p-16 mb-3">
                <h3 className='col-span-1 md:col-span-2 text-2xl mb-5 md:text-center'>Follow us on Instagram <a href="#" className='hover:text-orange-500'>@furniture</a></h3>
                <div className="flex flex-col md:flex-row gap-5 items-center md:items-end">
                    <Image src={i1} alt='network slow' />
                    <Image src={i2} alt='network slow' />
                </div>
                <div className="child2 items-start">
                    <div>
                        <CommonTitle title='Subscribe' subtitle='Lorem ipsum dolor sit amet consectetur elit.' />
                    </div>
                    <div className='flex flex-col items-center'>
                        <div>
                            <label htmlFor="email" className='sr-only'>Enter E-mail</label>
                            <input type="email" placeholder='your email address' className='p-5 mx-32 border border-slate-400 justify-end'></input>
                        </div>
                        <div className='mt-5'>
                            <ButtonCommon Name='Subscribe' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubsCribePage