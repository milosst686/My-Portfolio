import Image from "next/image";
import React, { useEffect, useState } from "react";

const Collection = () => {

    const [number, setNumber] = useState(0)
    const images= ['Aphrodite', 'Apollo', 'Ares', 'Artemis', 'Athena']
    let string;

useEffect(() =>{
    const increaseButton = document.getElementById("increase");
    const decreaseButton = document.getElementById("decrease");

    increaseButton.addEventListener("click", () =>{
        increasAmount();
    });
    decreaseButton.addEventListener("click", () =>{
        decreaseAmount();
    });

    async function increasAmount () {
        setNumber(number+1);
    }
    async function decreaseAmount () {
        number>0 ? setNumber(number-1) : setNumber(number);
    }
}, );


    return ( 
        <div>
            <div className=" flex w-[500px] h-auto ">
            {images.map((image, index ) =>{
                string = "/../public/graphic/"+images[index]+".jpg";
            return(
                <div key={index} className="p-4 flex justify-between rounded-xl">
                    
                   <div className="w-[350px] h-[500px] bg-slate-400 py-4   rounded-3xl">
                    <div className="flex justify-center items-start">
                    <Image src={string} alt="/" width='300'height='300' className="rounded-t-3xl"/>
                    </div>
                    <div className="flex justify-center items-start py-4">
                        <button id='increase' className="lx-4 px-4 rounded-none rounded-bl-3xl text-[20px]" > +</button>
                       <div className="bg-slate-500 w-[50px] h-[30px] flex justify-center items-center text-[#fe0000] text-[20px]">
                       <label htmlFor="numberOf" >{number}</label>
                       </div>
                        <button id='decrease'className="mr-4 px-4 rounded-none rounded-br-3xl text-[20px]"> -</button>
                    </div>
                   </div> 
                </div>
            );})}
            </div>
        </div>
     );
    
}
 
export default Collection;