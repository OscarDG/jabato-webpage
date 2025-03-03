import { anton, inter } from "@/app/ui/fonts";
import Hero from "./ui/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="flex justify-center items-center w-full h-80 bg-[url(@/public/pattern.png)] bg-black">
        <h1 className={`${anton.className} w-50 md:w-200 text-left md:text-center text-[3rem] md:text-[5rem] text-brandred`}>CERVEZAS CON CARACTER</h1>
      </section>
    </>
  );
}
