'use client';

import Image, { StaticImageData } from "next/image"
import Button from "./Button"
import clsx from "clsx"
import { useMemo } from "react";
import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { anton, inter } from '@/app/ui/fonts'


type ProductProps = {
    id: number,
    variant: string,
    name: string,
    carbonation: string,
    bitterness: string,
    alcohol: number,
    description: string,
    thumb: StaticImageData,
    pattern: StaticImageData,
    icons: StaticImageData[]
}

export default function Products({ 
    id,
    variant,
    name,
    carbonation,
    bitterness,
    alcohol,
    description,
    thumb,
    pattern,
    icons,
 }: ProductProps){

    const maxAlcohol = 15;

    const [customWidth, setCustomWidth] = useState(0);

    useEffect(() => {
        setCustomWidth((alcohol / maxAlcohol) * 100);
    }, [alcohol])

    const whatsAppText = useMemo(() => {
        const text = encodeURI(`Hola Jabato, me gustaría comprar cerveza ${name}`);
        return `https://wa.me/573027366778?text=${text}`
    }, []);
    
    return (
        <>
        <div key={id} className='relative flex flex-col md:flex-row md:flex-nowrap w-full'>
            <div className={clsx('relative flex flex-col justify-center items-center w-full md:w-[50%]', variant === 'amber'? `bg-brandred order-1 md:order-1`: variant === 'porter'? `bg-brandgreen order-1 md:order-2`: variant === 'seltzer'? `bg-brandpink order-1 md:order-1`: null )} style={{ backgroundImage: `url(${pattern.src})`}}>
                <div className={clsx("absolute", (id % 2) === 0? "top-10 -left-2 md:left-3": "top-10 right-0 md:right-10", "w-[35%] md:w-[25%] h-[20%] md:h-[25%]")}>
                {
                        icons.slice(0, 1).map((icon, index) => (
                            <Parallax speed={10} key={`icon-top-${index}`}>
                                <Image className='w-[100%] h-[80%]' src={icon} width={314} height={293} alt="Coffee icon"/>
                            </Parallax>
                        ))
                    }
                </div>
                <Parallax speed={10} className="w-full h-full flex justify-center items-center">
                    <Image className="w-[100%] md:max-w-[480px] h-[100%] md:max-h-[847]" src={thumb} width={639} height={1039} alt={`Imágen Lata ${name}`}/>
                </Parallax>
                <div className={clsx("absolute", (id % 2) === 0? "bottom-10 md:bottom-20 right-2": "bottom-10 md:bottom-20 left-2", "w-[20%] h-[20%]")}>
                    {
                        icons.slice(1,2).map((icon, index) => (
                            <Parallax speed={10} key={`icon-bottom-${index}`}>
                                <Image className='w-[100%] h-[80%]' src={icon} width={314} height={293} alt="Coffee icon"/>
                            </Parallax>
                        ))
                    }
                </div>
            </div>
            <div className={clsx('flex flex-col pt-[10%] pb-[10%] pl-[5%] md:pl-[2%] w-full md:w-[50%] h-[70%] md:h-auto', variant === 'amber'? 'bg-brandred order-2 md:order-2': variant === 'porter'? 'bg-brandgreen order-2 md:order-1': variant === 'seltzer'? 'bg-brandpink order-2 md:order-2': null)}>
                <div className="relative flex flex-col gap-4 w-[95%] md:w-[95%] h-[100%] md:h-[80%]">
                    <h1 className={`${anton.className} w-[100%] h-auto text-[4rem] md:text-[6rem] text-white`}>{name}</h1>
                    <p className={`${inter.className}  w-[100%] md:w-[95%] h-[76px] text-white mb-10 text-[0.9rem]`}>{description}</p>
                    <div className="flex flex-row w-full justify-between h-5 text-white">
                        <span className={clsx(alcohol === 0? 'hidden' : `${inter.className} text-[1rem] font-bold`)}>Alcohol</span>
                        <span className={clsx(alcohol === 0? 'hidden' : `${inter.className} text-[1rem] font-bold`)}>{alcohol}%</span>
                    </div>
                    <div className="relative flex items-center">
                        <span className={clsx(alcohol === 0? 'hidden' : "absolute w-full h-[1px] bg-white")}></span>
                        <span style={{width: `${customWidth}%`} as React.CSSProperties} className={clsx(alcohol === 0? 'hidden': "absolute h-[4px] bg-white rounded-md")}></span>
                    </div> 
                    <div className=" flex flex-row w-full justify-between h-5 text-white">
                        <span className={clsx(bitterness === ''? 'hidden': `${inter.className} text-[1rem] font-bold`)}>Amargor</span>
                        <span className={clsx(bitterness === ''? 'hidden': `${inter.className} text-[1rem] font-bold`)}>{bitterness}</span>
                    </div>
                    <div className="relative flex items-center">
                        <span className={clsx(bitterness === ''? 'hidden': "absolute w-full h-[1px] bg-white")}></span>
                        <span className={clsx(bitterness === 'Medio' ? `absolute h-[4px] w-[50%] bg-white rounded-md`: bitterness === 'Alto'? 'absolute h-[4px] w-[90%] bg-white rounded-md': bitterness === 'Bajo'? 'absolute h-[4px] w-[10%] bg-white rounded-md' : bitterness === ''? 'hidden': null)}></span>
                    </div>
                    <div className=" flex flex-row w-full justify-between h-5 text-white">
                        <span className={clsx(carbonation === ''? 'hidden': `${inter.className} text-[1rem] font-bold`)}>Carbonatación</span>
                        <span className={clsx(carbonation === ''? 'hidden': `${inter.className} text-[1rem] font-bold`)}>{carbonation}</span>
                    </div>
                    <div className="relative flex items-center">
                        <span className={clsx(carbonation === ''? "hidden": 'absolute w-full h-[1px] bg-white')}></span>
                        <span className={clsx(carbonation === 'Media Baja'? `absolute h-[4px] w-[40%] bg-white rounded-md`: carbonation === 'Baja'? 'absolute h-[4px] w-[20%] bg-white rounded-md': carbonation === 'Alta'? 'absolute h-[4px] w-[70%] bg-white rounded-md': carbonation === ''? 'hidden': null)}></span>
                    </div>
                    <div className="flex flex-col justify-center items-center w-[50%] md:w-[25%] h-15 mt-[2%]">
                        <Button height={100} width={100} to={whatsAppText} variant= "ghost">COMPRAR</Button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}