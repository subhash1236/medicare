/* eslint-disable no-unused-vars */
import React from 'react'
import { formateDate } from '../../utils/formateDate'

const DoctorAbout = () => {
    return (
        <div>
            <div>
                <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>About of
                    <span className='text-irisBlueColor font-bold text-[24px] leading-9'>Muhir Rahman</span>

                </h3>
                <p className=" text_para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero neque dolores consequuntur non, fuga id quis nulla voluptatem, magnam debitis quos cum, officiis ea recusandae. Nihil maiores dicta porro totam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quae et maiores ipsa architecto est hic possimus ea. Perferendis atque officiis doloremque labore consectetur aliquid dolores alias dicta obcaecati quo?
                </p>
            </div>
            <div className="mt-12">
                <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>
                <ul className="pt-4 md:p-5">
                    <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                        <div>
                            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                                {formateDate('09-13-2014')} -  {formateDate('09-13-2016')}

                            </span>
                            <p className='text-[16px] leading-6 font-medium text-textColor '>PHD in Surgeon</p>
                        </div>
                        <p className='text-[16px] leading-5 font-medium text-textColor '>New Apollo Hospital,New York</p>
                    </li>
                    <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                        <div>
                            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                                {formateDate('12-04-2010')} - {formateDate('14-08-2014')}

                            </span>
                            <p className='text-[16px] leading-6 font-medium text-textColor '>PHD in Surgeon</p>
                        </div>
                        <p className='text-[16px] leading-5 font-medium text-textColor '>New Apollo Hospital,New York</p>
                    </li>

                </ul>

            </div>
            <div className='mt-12'>
                <h3 className="text-[20x] leading-[30px] text-headingColor font-semibold">
                    Exprience
                </h3>
                <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                    <li className=' p-4 rounded bg-[#fff9ea]'>
                        <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                            {formateDate('12-04-2010')} - {formateDate('13-08-2014')}
                        </span>
                        <p className="text-[16px] leading-7 font-semibold text-textColor">
                            Sr. Surgeon
                        </p>
                        <p className='text-[14px] leading-5 font-medium text-textColor'>
                            New Appolo Hospital,New York
                        </p>
                    </li>
                    <li className=' p-4 rounded bg-[#fff9ea]'>
                        <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                            {formateDate('12-04-2010')} - {formateDate('13-08-2014')}
                        </span>
                        <p className="text-[16px] leading-7 font-semibold text-textColor">
                            Sr. Surgeon
                        </p>
                        <p className='text-[14px] leading-5 font-medium text-textColor'>
                            New Appolo Hospital,New York
                        </p>
                    </li>

                </ul>

            </div>

        </div>

    )
}

export default DoctorAbout
