import React from "react";
import {Colective } from "./Colective";

const Collection = () => {

    const images= ['Aphrodite', 'Apollo', 'Ares', 'Artemis', 'Athena', 'Demetra', 'Dionysus','Hades', 'Hepaestus',
                   'Hera', 'Heracles', 'Hermes', 'Medusa', 'Minotaur', 'Mystery', 'Posiedon', 'Siren', 'Special 6 Apollo', 
                   'Special 6 Jawz', 'Special 6 Jeffx', 'Special 6 Wartull', 'Special 6 Zeus', 'Tetra', 'Themis', 'Unbanksy', 'Zeus']
    return ( 
        <div className="w-full h-auto text-center  flex">
            <div className=" w-auto px-4 grid grid-cols-4 ">
            {images.map((image, index ) =>{
                let string =images[index];
            return(
                <div key={index}>
                   <Colective 
                    imageName = {string}
                    />
                </div>
            );})}
            </div>
        </div>
     );
    
}
 
export default Collection;