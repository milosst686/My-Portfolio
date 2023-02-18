import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

export const CollectionBar = () => {

  const router = useRouter();

  function goBack()
  {
    router.push("/collections");
  }
  return (
    <div className={ 'flex w-full justify-between  shadow-xl  z-[100] bg-[#4a6b79]'}>
        <div className=' items-center ml-20 pl-2'>
        <Image src="/../public/graphic/logo.png" alt="/" width='100'height='100' />
        </div>
        <div className='flex items-center'>
          <h2 className=' !text-transparent bg-gradient-to-r to-[rgb(251,103,103)] from-[#fe0000] bg-clip-text'>Goods of Olympus</h2>
        </div>
        <div className='flex justify-end items-center mr-7'>
          <button className='h-10 w-20' onClick={() =>goBack()}>back</button>
        </div>
    </div>      
  )
}
