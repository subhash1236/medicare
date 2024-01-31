/* eslint-disable no-unused-vars */
import React from 'react'
import ServicesCard from './ServicesCard';
import {services} from './../../data/services';

const ServicesList = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
     
     {
      services.map((item,index)=><ServicesCard item={item} index={index}  key={index}/>)
     }
    </div>
  )
}

export default ServicesList;
