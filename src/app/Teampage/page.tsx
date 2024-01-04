import React from 'react'
import Member from '../../components/Teammember/Member'
import pic2 from '../../../public/het.jpg'
import pic3 from '../../../public/dipesh.jpg'
import pic1 from '../../../public/shlok.png'
import pic4 from '../../../public/kirtan.jpg'
import pic5 from '../../../public/raghvendra.jpg'
// import pic6 from
// import pic7 from
// import pic8 from
import Image from 'next/image'

type Props = {}

const Teampage = (props: Props) => {
    return (
        <>
        {/* style={{backgroundImage: 'url(/icon/team.jpg)',height:"auto" ,width:"auto" }} */}
            <div className="responsive-container-block outer-container" >
                <div className="responsive-container-block inner-container">
                    <p className="text-blk section-head-text">
              Caffiene Coders
                    </p>
                    <p className="text-blk section-subhead-text text-slate-600">
                   
                    </p>
                    <div className="responsive-container-block">
                        <Member
                            src={pic1}
                            alt='vrnla'
                            name='Shlok Solanki'
                            skill='Developer' />
                        <Member
                            src={pic2}
                            alt='vrnla'
                            name='Patel Het'
                            skill='Developer' />
                        <Member
                            src={pic3}
                            alt='vrnla'
                            name='Dipesh Mali'
                            skill='Developer' />
                        <Member
                            src={pic4}
                            alt='vrnla'
                            name='Kirtan Kathiriya'
                            skill='Developer' />

                        <Member
                            src={pic5}
                            alt='vrnla'
                            name='Raghvendra Rajput'
                            skill='Developer' />

                        <Member
                            src={pic3}
                            alt='vrnla'
                            name='Patel Het'
                            skill='Developer' />

                        <Member
                            src={pic3}
                            alt='vrnla'
                            name='Patel Het'
                            skill='Developer' />

                        <Member
                            src={pic3}
                            alt='vrnla'
                            name='Patel Het'
                            skill='Developer' />



                    </div>
                </div>
            </div>



        </>
    )
}

export default Teampage