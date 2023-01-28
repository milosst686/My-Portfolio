import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

export const Contact = () => {
  return (
    <div id='Contacts'  className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto px-2 py-28 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
            <h2 className='py-4'>Get in touch</h2>
            <div className=' grid lg:grid-cols-5 gap-8'>
             <div className=' col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-2 '>
            <div className='lg:p-2 h-full'>
                <div>
                    <img className='rounded-xl hover:scale-105 ease-in duration-300 ' src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwd29ya2luZyUyMG9uJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&w=1000&q=80" alt="/" />
                </div>
                <div>
                    <h2 className='py-2'>Milos Stankovic</h2>
                    <p>Game Developer</p>
                    <p className='py-4'>I am available for freelance. Contact me and let's talk</p>
                </div>
            <div>
                <p className='uppercase pt-8'>Connect with me</p>
                <div className='flex items-center justify-between py-4'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 mx-5'>
                    <FaLinkedinIn />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 mx-5'>
                        <FaGithub size={20}/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 mx-5'>
                         <AiOutlineMail size={20}/>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <div className=' col-span-3 w-full h-auto shadow-xl  shadow-gray-400 rounded-xl lg:p-4'>
                <div className='p-4'>
<form >
    <div className='flex  md:col-span-2 gap-8 w-full py-2'>
        <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Name</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
        </div>
        <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Phone number</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
        </div>
    </div>
    <div className='flex flex-col py-2'>
    <label className='uppercase text-sm py-2'>Email</label>
    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />
    </div>
    <div className='flex flex-col py-2'>
    <label className='uppercase text-sm py-2'>Subject</label>
    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
    </div>
    <div className='flex flex-col py-2'>
    <label className='uppercase text-sm py-2'>Message</label>
    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10'></textarea>
    </div>
    <button className=' w-full p-4 text-gray-100 mt-4'>Send message</button>
</form>
                </div>
            </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href="/">
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 mx-5'>
                        <HiOutlineChevronDoubleUp className='text-[#5651e5]'  size={30}/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}
