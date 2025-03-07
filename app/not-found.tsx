import Link from "next/link";
import {inter} from '@/app/ui/fonts'

export default function NotFound(){
    return(
        <div className="flex flex-col items-center md:items-left justify-center h-screen bg-brandgray bg-[url(/pattern.png)] md:bg-right-center">
            <div className="flex flex-col justify-evenly items-center rounded-2xl w-[85%] md:w-[60%] h-[40%] md:h-[62%] pb-2 bg-black">
                <h1 className={`${inter.className} text-7xl md:text-[10rem] font-bold text-white`}>404</h1>
                <p className={`${inter.className} text-xl md:text-6xl mt-4 font-bold text-white text-center`}>Ooops, creo que la embarramos!</p>
                <span className={`${inter.className} text-[.6rem] md:text-[1rem] text-center mt-[2%] text-white w-[70%]`}>Parece que has hecho click en un link errado o has ingresado a una dirección fallida. Puedes regresar al Home para seguir conociendo.</span>
                <Link href="/" className={`${inter.className} flex justify-center items-center mt-6 px-4 py-2 w-[30%] md:w-[20%] md:h-[10%] bg-brandgreen text-white rounded-lg hover:bg-red-800 transition`}>
                    Volver
                </Link>
            </div>
      </div>
    )
}