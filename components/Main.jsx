import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {SiLinktree} from 'react-icons/si';

export const Main = () => {
  return (
    <div id='Home' className='w-full h-screen text-center pt-[100px]'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-5 flex justify-between items-center'>
            <div >
                <p className='uppercase text-sm tracking-widest text-gray-600'>CREATE EPIC GAMES WITH ME</p>
                <h1 className='py-4 text-gray-700'>HI there,  I'm<span className=' text-[#5651e5]'> Milos</span> </h1>
                <h1 className='py-4 text-gray-700'>An Indie Game Developer </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto '>I'm an indie game developer, with working expiriance in every area of game developement process, from createing GDD,
                    scripting with c# in unity, over creating pixel art or 3D models, all the way to creating UX/UI designes and testing games.
                    Currently im focused on upgrading and learning new programming languages as NextJS,TailwindCss,Javascript,React and Solidity.
                </p>
                <div className='flex items-center justify-center mas-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 mx-5'>
                    <a href="https://www.linkedin.com/in/milosst686" target="_blank"><FaLinkedinIn size={20} /></a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 mx-5'>
                        <a href='https://github.com/milosst686' target='_blank'><FaGithub size={20}/></a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 mx-5'>
                    <a href='milosst686@hotmail.com' target='_blank'><AiOutlineMail size={20} /></a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 mx-5'>
                    <a href='https://linktr.ee/milosst686' target='_blank'> <SiLinktree size={20}/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
