import React from 'react';
import 'tailwindcss/tailwind.css';
import { Product } from '@/components/common/productFunction/path'; 
import Categ1 from '@/components/common/productFunction/CategFeatureList';

const FeatureList = () => {
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

  ];

  return <Categ1 productData={productData} />;
};

export default FeatureList;