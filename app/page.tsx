import { anton, inter } from "@/app/ui/fonts";
import Image from "next/image";
import hopImage from '@/public/hop.svg'
import secondBanner from '@/public/footer-image.png'
import Hero from "@/app/ui/Hero";
import Products from "./ui/Products";

export default function Home() {

  const products = [{
    id: 1,
    name: "Product 1",
    thumb: "AmberPattern.png",
    pattern: ""
  },
  {
    id: 2,
    name: "Product 2",
    thumb: "",
    pattern: ""
  },
  {
    id: 3,
    name: "Product 3",
    thumb: "",
    pattern: ""
  },
]

  return (
    <>
      <Hero />
      <section className="flex justify-center items-center w-full h-80 bg-[url(/pattern.png)] bg-black">
        <h1 className={`${anton.className} w-50 md:w-200 text-left md:text-center text-[3rem] md:text-[5rem] text-brandred`}>CERVEZAS CON CARACTER</h1>
      </section>
      <section className="flex flex-col w-full">
        <Products variant='amber'/>
        <Products variant='porter'/>
        <Products variant='seltzer'/>
      </section>
      <section className="flex flex-col justify-evenly items-center w-full h-90 md:h-100 bg-[url(/pattern.png)] bg-black">
        <p className={`${inter.className} w-[85%] md:w-[50%] h-auto text-[1.2rem] md:text-[1.5rem] text-white text-center`}>Somos los luchadores, los que damos el salto al vacío, los que aun cuando tenemos miedo lo intentamos</p>
        <span className="w-10 h-1"><Image src={hopImage} width={30} height={30} alt="Hope icon" /></span>
        <h2 className={`${anton.className} w-[80%] md:w-200 text-center md:text-center text-[1.5rem] md:text-[2rem] text-white`}>Somos grandes, desde pequeños</h2>
      </section>
      <section className="flex justify-center items-center w-full h-100 overflow-hidden">
        <Image className= "w-full h-full object-cover" src={secondBanner} width={1365} height={709} alt="Imágen de latas de cerveza" />
      </section>
    </>
  );
}
