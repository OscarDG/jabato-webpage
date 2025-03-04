import Image from "next/image"
import Button from "./Button"
import clsx from "clsx"
import { anton, inter } from '@/app/ui/fonts'
import porterImage from '@/public/lata-porter.png'
import amberImage from '@/public/lata-amber.png'
import seltzerImage from '@/public/lata-seltzer.png'

const text = encodeURI('Hola Jabato, me gustaría comprar cerveza')
const whatsAppText = `https://wa.me/573027366778?text=${text}`

const enum Porter {
    carbonation = 'Media Baja',
    bitterness = 'Medio',
    alcohol = 5.5
}

const enum Amber {
    carbonation = 'Media Baja',
    bitterness = 'Medio',
    alcohol = 5.5
}

const enum Seltzer {
    carbonation = '',
    bitterness = '',
    alcohol = 5.5
}

const maxAlcohol = 15;


type ProductProps = {
    variant: 'amber' | 'porter' | 'seltzer'
}

export default function Products({ variant = 'amber'}: ProductProps){

    return (
        <div className='relative flex flex-col md:flex-row md:flex-nowrap w-full h-[150vh]'>
              {
                variant === 'amber' ? (
                    <div className=" relative flex flex-col justify-center items-center w-full md:w-[50%] h-[50%] md:h-[100%] bg-brandred bg-[url(/amber-pattern.png)] z-0 order-1">
                        <Image className="relative w-[470px] h-[758px]" src={amberImage} width={639} height={1039} alt="Imágen Lata Porter"/>
                    </div>
                ): variant === 'porter' ? (
                    <div className="relative flex flex-col justify-center items-center w-full md:w-[50%] h-[50%] md:h-[100%] bg-brandgreen bg-[url(/porter-pattern.png)] order-2">
                        <Image className="relative w-[470px] h-[758px]" src={porterImage} width={639} height={1039} alt="Imágen Lata Porter"/>
                    </div>
                ): variant === 'seltzer' ? (
                    <div className="relative flex flex-col justify-center items-center w-full md:w-[50%] h-[50%] md:h-[100%] bg-brandpink bg-[url(/seltzer-pattern.png)] order-1">
                        <Image className="relative w-[485px] h-[758px]" src={seltzerImage} width={639} height={1039} alt="Imágen Lata Porter"/>
                    </div>
                ): null
              }
            
            {
                variant === 'amber' ? (
                    <div className="flex flex-col items-left pl-[5%] pt-[15%] md:pl-[5%] w-full md:w-[50%] h-[50%] md:h-auto bg-brandred order-2">
                        <div className="relative flex flex-col gap-5 w-[95%] md:w-[95%] h-[100%] md:h-[80%]">
                            <h1 className={`${anton.className} w-[100%] h-auto text-[5rem] md:text-[6rem] text-white`}>AMBER ALE</h1>
                            <p className={`${inter.className}  w-[90%] md:w-[95%] h-[76px] text-white mb-10`}>
                                Con un color ámbar, notas a caramelo y un carácter cítrico, la hace nuestra cerveza favorita. Tiene el perfecto balance entre el dulce de la malta y el amargo de los lúpulos, es muy refrescante y con sabroso cuerpo.
                            </p>
                            <div className="flex flex-row w-full justify-between h-10 text-white">
                                <span>Alcohol</span>
                                <span>{Amber.alcohol}</span>
                            </div>
                            <div className="relative flex items-center">
                                <span className=" absolute w-full h-[1px] bg-white"></span>
                                <span style={{"--custom-width": `${Amber.alcohol/maxAlcohol * 100}%`} as React.CSSProperties} className="absolute w-[var(--custom-width)] h-[4px] bg-white rounded-md"></span>
                            </div> 
                            <div className=" flex flex-row w-full justify-between h-10 text-white">
                                <span>Amargor</span>
                                <span>{Amber.bitterness}</span>
                            </div>
                            <div className="relative flex items-center">
                                <span className=" absolute w-full h-[1px] bg-white"></span>
                                <span className={clsx(`absolute h-[4px]`, Porter.bitterness === 'Medio' ? `w-[50%] bg-white rounded-md`: `w-0 bg-white rounded-md`)}></span>
                            </div>
                            <div className=" flex flex-row w-full justify-between h-10 text-white">
                                <span>Carbonatación</span>
                                <span>{Amber.carbonation}</span>
                            </div>
                            <div className="relative flex items-center">
                                <span className=" absolute w-full h-[1px] bg-white"></span>
                                <span className={clsx(`absolute h-[4px]`, Porter.carbonation === 'Media Baja' ? `w-[40%] bg-white rounded-md`: `w-0 bg-white rounded-md`)}></span>
                            </div>
                            <div className="flex flex-col justify-center items-center w-[40%] h-20">
                                <Button to={whatsAppText} variant= "ghost">COMPRAR</Button>
                            </div>
                        </div>
                    </div>
                ): variant === 'porter' ? (
                    <div className="flex flex-col items-left pl-[5%] pt-[15%] md:pl-[5%] w-full md:w-[50%] h-[50%] md:h-auto bg-brandgreen order-1">
                        <div className="relative flex flex-col gap-5 w-[95%] md:w-[95%] h-[100%] md:h-[80%]">
                            <h1 className={`${anton.className} w-[100%] h-auto text-[5rem] md:text-[6rem] text-white`}>PORTER</h1>
                            <p className={`${inter.className}  w-[90%] md:w-[95%] h-[76px] text-white mb-10`}>
                            Cerveza tipo porter con notas a caramelo, chocolate y café, le agregamos una adición extra de café Campo Alto(un emprendimiento, como nosotros) justo antes de empacarla, que le da mucha más fuerza a su sabor.
                            </p>
                            <div className="flex flex-row w-full justify-between h-10 text-white">
                                <span>Alcohol</span>
                                <span>{Porter.alcohol}</span>
                            </div>
                            <div className="relative flex items-center">
                                <span className=" absolute w-full h-[1px] bg-white"></span>
                                <span style={{"--custom-width": `${Porter.alcohol/maxAlcohol * 100}%`} as React.CSSProperties} className="absolute w-[var(--custom-width)] h-[4px] bg-white rounded-md"></span>
                            </div>
                            <div className=" flex flex-row w-full justify-between h-10 text-white">
                                <span>Amargor</span>
                                <span>{Porter.bitterness}</span>
                            </div>
                            <div className="relative flex items-center">
                                <span className=" absolute w-full h-[1px] bg-white"></span>
                                <span className={clsx(`absolute h-[4px]`, Porter.bitterness === 'Medio' ? `w-[50%] bg-white rounded-md`: `w-0 bg-white rounded-md`)}></span>
                            </div>
                            <div className=" flex flex-row w-full justify-between h-10 text-white">
                                <span>Carbonatación</span>
                                <span>{Porter.carbonation}</span>
                            </div>
                            <div className="relative flex items-center">
                                <span className=" absolute w-full h-[1px] bg-white"></span>
                                <span className={clsx(`absolute h-[4px]`, Porter.carbonation === 'Media Baja' ? `w-[40%] bg-white rounded-md`: `w-0 bg-white rounded-md`)}></span>
                            </div>
                            <div className="flex flex-col justify-center items-center w-[40%] h-20">
                                <Button to={whatsAppText} variant= "ghost">COMPRAR</Button>
                            </div>
                        </div>
                    </div>
                ): variant === 'seltzer' ? (
                    <div className="flex flex-col items-left pl-[5%] pt-[15%] md:pl-[8%] w-full md:w-[50%] h-[50%] md:h-auto bg-brandpink order-2">
                    <div className="relative flex flex-col gap-5 w-[95%] md:w-[95%] h-[100%] md:h-[80%]">
                        <h1 className={`${anton.className} w-[100%] h-auto text-[5rem] md:text-[6rem] text-white`}>SELTZER</h1>
                        <p className={`${inter.className}  w-[90%] md:w-[95%] h-[76px] text-white mb-10`}>
                        Agua con gas, alcohol y mucho sabor. Dulce, acida, refrescante y con un ligero toque amargo, es una bebida elegante, algunos la consideran una opción saludable, nosotros solo creemos que es un hit!
                        </p>
                        <div className=" flex flex-row w-full justify-between h-10 text-white">
                            <span>Alcohol</span>
                            <span>{Seltzer.alcohol}</span>
                        </div>
                        <div className="relative flex items-center">
                            <span className=" absolute w-full h-[1px] bg-white"></span>
                            <span style={{"--custom-width": `${Seltzer.alcohol * 10}%`} as React.CSSProperties} className="absolute w-[var(--custom-width)] h-[4px] bg-white rounded-md"></span>
                        </div>
                        <div className="flex flex-col justify-center items-center w-[40%] h-20">
                            <Button to={whatsAppText} variant= "ghost">COMPRAR</Button>
                        </div>
                    </div>
                </div>
                ): null
            }
        </div>
    )
}