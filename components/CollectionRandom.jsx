import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import misteryImage from '../public/graphic/Mistery.png'
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";

export default function CollectionRandom() {

    const [number, setNumber] = useState(0);

    async function increasAmount () {
        setNumber(number+1);
        number>= 26 ? setNumber(26): setNumber(number+1);
        }

        async function decreaseAmount () {
        number>0 ? setNumber(number-1) : setNumber(number);        
        }
        
        async function createContract(){
            const sdk = new ThirdwebSDK("goerli");
            const contract = await sdk.getContract("0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199");

            const withdrawETC = await contract.call("withdraw");
            const sentNFT = await contract.call("mintNFT", recipient, tokenURI)
        }




  return (
    <div className='flex justify-center'>
        <div className="w-[350px] h-[500px] bg-slate-700 py-4   rounded-3xl mt-20">
                    <div className="flex justify-center items-start">
                    <Image src={misteryImage} alt="/" width='300'height='300' className="rounded-t-3xl"/>
                    </div>
                    <div className="flex justify-center items-center py-4">
                        <button  onClick={increasAmount} className="lx-4 rounded-none rounded-bl-3xl text-4xl h-[50px] w-[80px]" > +</button>
                       <div className="bg-slate-500 w-[80px] h-[50px] flex justify-center items-center text-[#fe0000] text-[20px]">
                       <label htmlFor="numberOf">{number}</label>
                       </div>
                        <button  onClick={decreaseAmount} className="rounded-none rounded-br-3xl text-4xl h-[50px] w-[80px]">-</button>
                    </div>
                    <div >
                        <p className='text-2xl text-[#fe0000]  text-center'>TOTAL: {(0.001*number).toFixed(3)} eth</p>
                        <div className='flex justify-end'>
                        <button className='mr-5 mt-6 rounded-3xl text-xl h-[30px] w-[80px] ' onClick={createContract}>MINT</button>
                        </div>
                    </div>
                    
                   <div className='mt-5'>
                    <label htmlFor="go to ">Check the colection <Link href='/collection' className='text-[#fe0000]'>here</Link></label>
                   </div>
                   </div> 
    </div>
  )
}
