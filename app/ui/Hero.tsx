import Image from "next/image"
import HeroImage from "@/public/hero-image.jpg"
import Button from "@/app/ui/Button"

export default function Hero(){

    const text = encodeURI('Hola Jabato, me gustaría comprar cerveza')
    const whatsAppText = `https://wa.me/573027366778?text=${text}`

    return (
        <section className="relative flex flex-col items-center w-full h-150">
            <Image className="object-cover w-full  h-full" src={HeroImage} width={1440} height={644}  alt="Hero Image"/>
            <Button to={whatsAppText} variant="primary">COMPRA JABATO</Button>
        </section>
    )
}