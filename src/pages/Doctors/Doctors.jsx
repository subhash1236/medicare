/* eslint-disable no-unused-vars */
import React from 'react'
import { doctors } from '../../data/docters'
import DocterCard from '../../components/Docters/DocterCard'

const Doctors = () => {
  return (
    <>
    <section>
        <div className="container text-center">
            <h2 className="heading">Find a Docter</h2>
            <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
                <input type="search" className="w-full py-4 pl-4 pr-2 bg-transparent cursor-pointer focus-outline-none placeholder:text-textColor" placeholder='Search Docter'   
                />
                <button className='mt-0 btn rounded-[0px] rounded-r-md'>Search</button>
                
            </div>
            
            
        </div>
      
    </section>
    <section>
        <div className="container">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                {
                    doctors.map((doctors)=>(
                        <DocterCard key={doctors.id} docter={doctors}/>
                    ))
                }
                
            </div>
        </div>
        
    </section>
    </>
  )
}

export default Doctors
