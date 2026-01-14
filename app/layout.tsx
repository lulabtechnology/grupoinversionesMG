import type { Metadata } from "next";
import "./globals.css";
import { Inter, Manrope } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grupo MG | Soluciones operativas y administrativas",
  description:
    "Soluciones operativas y administrativas con bases tecnológicas para bodegas, PH y centros comerciales en Panamá, Centroamérica y el Caribe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${manrope.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
