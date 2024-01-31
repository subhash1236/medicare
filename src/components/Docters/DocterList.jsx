/* eslint-disable no-unused-vars */
import React from 'react';
import { doctors } from './../../data/docters'; // Corrected the import path
import DocterCard from './DocterCard';

const DoctorList = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
     {
      doctors.map(docter =>(
        <DocterCard key={docter.id} docter={docter}/>
      ))
     }
    </div>
  );
};

export default DoctorList; // Corrected the component name to DoctorList
