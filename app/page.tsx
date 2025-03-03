import { anton, inter } from "@/app/ui/fonts";
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
      <section className="flex justify-center items-center w-full h-80 bg-[url(/pattern.png)] bg-black">
        <h1 className={`${anton.className} w-50 md:w-200 text-left md:text-center text-[3rem] md:text-[5rem] text-brandred`}>CERVEZAS CON CARACTER</h1>
      </section>
    </>
  );
}
