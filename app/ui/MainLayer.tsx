'use client';

import {inter} from '@/app/ui/fonts'

type layerProps = {
    active: string,
    yes: () => void,
    no: () => void,
}

export default function Layer({
    active, 
    yes, 
    no
}:layerProps){
 
    return (
        <aside className={`container ${active} flex justify-center items-center z-5 bg-brandred/80 w-full h-[100vh]`}>
            <div className="flex flex-col items-center w-[90%] h-[90%] rounded-3xl bg-brandgray bg-[url(/pattern.png)]">
                <h1 className={`${inter.className} text-white font-extrabold text-[4rem] mt-[10%]`}>¿Tienes 18 años o más?</h1>
                <div className="flex flex-row justify-evenly items-center w-[70%] h-[50%]">
                    <button onClick={yes}className="flex justify-center items-center w-[20%] h-[25%] border-0 bg-brandgreen rounded-2xl transition duration-200 ease-in hover:scale-110 hover:cursor-pointer">
                        <h3 className={`${inter.className} text-[2rem] text-white`}>SI</h3>
                    </button> 
                    <button onClick={no} className="flex justify-center items-center w-[20%] h-[25%] border-0 bg-brandgreen rounded-2xl transition duration-200 ease-in hover:scale-110 hover:cursor-pointer">
                        <h3 className={`${inter.className} text-[2rem] text-white`}>NO</h3>
                    </button> 
                </div> 
            </div>
        </aside>
    )
};