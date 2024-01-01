import React from 'react'

type Props = {}

const Divider = () => {
    return (
        <div className='Breadcrumb  text-center p-[80px] sm:p-[90px] md:p-24 bg-no-repeat bg-scroll bg-center bg-cover bg-white' style={{ backgroundImage: 'url(/icon/dividerPhoto.jpg)' }}>
            <div className="container max-w-screen-xl">
                <div className="row flex flex-wrap -ml-4 -mr-4">
                    <div className="col basis-7/12  flex-shrink-0 flex-grow-0 relative pr-4 pl-4">
                        <div className="divider-info m-0 p-0 text-justify max-w-fit  sm:text-left">
                            <h2 className="title text-2xl leading-8 sm:text-3xl -mt-3 sm:leading-10 md:text-5xl md:leading[55px]-10 md:mb-2">Contrary to popular belief is not simply rand.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                sed do eiusmod tempor incid </p>
                            <button type='button' className='  pt-1 pr-6 pb-1 pl-6 w-44 text-white hover:bg-black h-12 border-2 bg-orange-600'>SHOP NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Divider