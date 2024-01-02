import React from 'react'
import Humar_new_agregado from '../module/Humar Card Details/HumarCardDetails'
import ProductImageSection, { allProduct } from '../module/Product Image/ProductImage'
import Newdescription from '../module/Description Section'

type Props = {}

const App = () => {
  
  return (
    <main className="flex px-10 gap-5">
        <div className='flex flex-col py-10 gap-5 justify-center items-center md:grid md:grid-cols-2'>
            <div className="product-image-section"><ProductImageSection image='/a.jpeg' allProduct={allProduct}/> </div>
            <div className="product-details-section"><Humar_new_agregado/></div>
            <div className='col-span-2'><Newdescription/></div>
        </div>
    </main>
  )
}

export default App