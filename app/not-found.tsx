import Link from "next/link";
import {inter} from '@/app/ui/fonts'

export default function NotFound(){
    return(
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <h1 className={`${inter.className} text-6xl font-bold`}>404</h1>
            <p className={`${inter.className} text-xl mt-4`}>Lo sentimos, la página que buscas no existe.</p>
            <Link href="/" className={`${inter.className} mt-6 px-4 py-2 bg-brandred text-white rounded-lg hover:bg-red-700 transition`}>
                Inicio
            </Link>
      </div>
    )
}