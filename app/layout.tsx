import type { Metadata } from "next";
import { anton, inter } from '@/app/ui/fonts'
import Header from '@/app/ui/Header';
import "@/app/ui/globals.css";
import Footer from "@/app/ui/Footer";

export const metadata: Metadata = {
  title: {
    template: '%s | Jabato cervecería | Cervezas con carácter',
    default: 'Jabato cervecería | Cervezas con carácter'},
  description: "Cervezas artesanales con carácter. Ven y averigua porque somos la cervecería que nació grande desde pequeña.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${anton.className} antialiased flex flex-col`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
