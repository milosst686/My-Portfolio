import Image from 'next/image';
import React, { useState } from 'react';
 
export const Colective = ({imageName}) =>{
   let string =  "/../public/graphic/"+imageName+".jpg"


  return (
    <div className='w-max-[1024px] w-full h-auto text-center p-4'>
        <div className="w-[350px] h-[500px] bg-slate-400 rounded-3xl py-4">
                    <div className="flex justify-center items-start">
                    <Image src={string} alt="/" width='300'height='300' className="rounded-t-3xl"/>
                    </div>
                   
                    <div >
                        <h2 className='flex justify-center my-5 text-[#fe0000]'>{imageName}</h2>
                        <p className='flex justify-center my-5 text-[30px]'>Price: {0.001} eth</p>
                    </div>
                   </div> 
    </div>
  )
}
