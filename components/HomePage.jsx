import React from 'react'

const HomePage = () => {
  return (
    <div>
        <div className='text-[#fe0000] flex justify-left pt-28 pl-20'>
        <h2 className='drop-shadow-[4px_3px_3px_#FE53BB] ' >Welcome to our NFT collection</h2>
        </div>
        <div className='text-[#ff7e7e]  justify-left pl-20 text-[30px]'>
        <p>This site is created by Despot and milosst686 as a practice project. <br/>
          Tehniques used for developing: Solidity, NextJS and TailwindCSS</p>
          <hr className='border-[#fe0000] w-[50%]' /> <br/>
         <p> To check out collection, please connect.</p>
        </div>
    </div>
  )
}

export default HomePage