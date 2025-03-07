'use client';

import {inter} from '@/app/ui/fonts'
import Image from 'next/image';
import Logo from '@/public/jabato-logo.svg'

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
        <aside className={`${active} flex justify-center items-center z-5 bg-black/90 w-[100%] md:w-[100%] h-[100vh]`}>
            <div className="flex flex-col justify-evenly items-center w-[90%] h-[70%] md:h-[90%] rounded-3xl bg-brandgray bg-[url(/pattern.png)]">
                <Image className="absolute top-45 md:top-30" src={Logo} width={234} height={234} alt="Logo Jabato" />
                <h1 className={`${inter.className} text-white font-extrabold  text-[2rem] md:text-[4rem] md:mt-[20%] mt-[55%] w-[90%] text-center`}>¿Tienes 18 años o más?</h1>
                <div className="flex flex-row justify-evenly items-center w-[70%] h-[50%]">
                    <button onClick={yes}className="flex justify-center items-center w-[40%] md:max-w-[200px] md:w-[30%] h-[25%] md:max-h-[80px] md:h-[25%] border-0 bg-brandgreen rounded-2xl transition duration-200 ease-in hover:scale-110 hover:cursor-pointer">
                        <h3 className={`${inter.className} text-[2rem] text-white`}>SI</h3>
                    </button> 
                    <button onClick={no} className="flex justify-center items-center w-[40%] md:max-w-[200px] md:w-[30%] h-[25%] md:max-h-[80px] md:h-[25%] border-0 bg-brandred rounded-2xl transition duration-200 ease-in hover:scale-110 hover:cursor-pointer">
                        <h3 className={`${inter.className} text-[2rem] text-white`}>NO</h3>
                    </button> 
                </div> 
            </div>
        </aside>
    )
};