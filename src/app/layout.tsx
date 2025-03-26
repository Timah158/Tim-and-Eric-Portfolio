import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/app/components/navbar'
import Footer from '@/app/components/footer'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ModalProvider } from "@/app/context/modalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tim & Eric",
  description: "Hire Tim and Eric!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SpeedInsights/>
      <html lang="en">
        <body className={inter.className}>
          <ModalProvider>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
          </ModalProvider>
        </body>
      </html>
    </>
  );
}
