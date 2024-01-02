'use client'
import React, { useState } from 'react';
import { PRODUCT_CATEGORIES } from '@/config';
import NavItem from './NavItem'

const Navitems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const inAnyOpen = activeIndex !== null

  return (
    <div className='flex gap-4 h-full'>
      {PRODUCT_CATEGORIES.map((category, i) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        };
        
        const isOpen = i === activeIndex;

        
        return (
          <NavItem
          category={category}
          handleOpen={handleOpen}
          isOpen={isOpen}
          key={category.value}
  
        />
        );
      })}
    </div>
  );
}

export default Navitems;


