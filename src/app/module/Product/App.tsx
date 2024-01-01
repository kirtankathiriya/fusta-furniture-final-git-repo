import React from 'react';
import 'tailwindcss/tailwind.css';
import { Product } from '@/app/component/ReUseable/productFunction/path'; 
import Categ from '@/app/component/ReUseable/productFunction/Categ';

const App = () => {
  const productData: Product[] = [
    {
      image: 'a.jpeg',
      title: 'Humor New Agregado',
      discount:'-7%',
      price1: '$700.00',
      price2: '$650.00'
    },
    {
      image: 'b.jpeg',
      title: 'Humor New Agregado',
      discount:'-7%',
      price1: '$700.00',
      price2: '$650.00'
    },
    {
      image: 'c.jpeg',
      title: 'Humor New Agregado',
      discount:'-7%',
      price1: '$700.00',
      price2: '$650.00'
    },
    {
      image: 'd.jpeg',
      title: 'Humor New Agregado',
      discount:'-7%',
      price1: '$700.00',
      price2: '$650.00'
    },
    {
      image: 'e.jpeg',
      title: 'Humor New Agregado',
      discount:'-7%',
      price1: '$700.00',
      price2: '$650.00'
    },
    {
      image: 'f.jpeg',
      title: 'Humor New Agregado',
      discount:'-7%',
      price1: '$700.00',
      price2: '$650.00'
    },
    {
      image: 'g.jpeg',
      title: 'Humor New Agregado',
      discount:'-7%',
      price1: '$700.00',
      price2: '$650.00'
    },
    {
      image: 'h.jpeg',
      title: 'Humor New Agregado',
      discount:'-7%',
      price1: '$700.00',
      price2: '$650.00'
    },
  ];

  return <Categ productData={productData} />;
};

export default App;