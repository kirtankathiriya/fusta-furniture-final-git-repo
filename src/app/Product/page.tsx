import Newdescription from '@/containers/Description Section'
import Humar_new_agregado from '@/containers/Humar Card Details/HumarCardDetails'
import ProductImageSection, { allProduct } from '@/containers/Product Image/ProductImage'
import React from 'react'

type Props = {}

const App = () => {
  
  return (
    <main className="flex px-10 gap-5 w-full justify-center items-center">
        <div className='flex flex-col justify-center items-center md:grid md:grid-cols-2'>
            <div className="product-image-section"><ProductImageSection image='/a.jpeg' allProduct={allProduct}/> </div>
            <div className="product-details-section"><Humar_new_agregado/></div>
            <div className='col-span-2 pb-5'><Newdescription/></div>
        </div>
    </main>
  )
}

export default App