import Image from 'next/image'
import JabatoLogo from '@/public/jabato-logo.svg'

export default function Header(){
    return (
        <header className="fixed flex justify-center align-middle bg-black w-screen h-15 z-1">
            <a href="/" className="flex justify-center">
                <Image src={JabatoLogo} width={80} height={50} alt='Jabato logo'/>
            </a>
        </header>
    )
}