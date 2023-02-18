import Image from 'next/image';
import { useRouter } from 'next/router';
import React, {useEffect} from 'react';
import logoImage from '../public/graphic/logo.png';

export const Navbar = () => {

    const router = useRouter();

  useEffect(() =>{
    // Web3 browser detection
      if(typeof window.ethereum !== "undefine")
      {
          console.log("Web3 wallet is instaled");
      }

      //geting button id
    const connectButton = document.getElementById("connect");

      //Connect Account function
    connectButton.addEventListener("click", () =>{
        connecteAccount();
    });

    async function connecteAccount(){
       const accounts = await ethereum.request({
        method: "eth_requestAccounts",
       });
       const account = accounts[0];
       connectButton.innerHTML=
       account[0]+
       account[1]+
       account[2]+
       account[3]+
       account[4]+
       account[5]+
       "..."+
       account[38]+
       account[39]+
       account[40]+
       account[41];

       if(account != null)
    {
        router.push("/collections");}
    }
  }, []);
  return (
    <div className={ 'flex w-full  shadow-xl  z-[100] bg-[#4a6b79]'}>
        <div className='flex justify-between items-center w-full h-full ml-20 pl-2'>
        <Image src={logoImage} alt="/" width='100'height='100' />
        </div>
        <div>
            <button id='connect' className='w-[100px] h-[50px] mt-5 mr-28 text-sm'>Connect</button>
        </div>
    </div>      
  )
}
