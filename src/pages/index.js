import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { About, Banner, Resume, Contact, Experience } from "@/sections";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash !== "") {
      const targetElement = document.querySelector(hash);
      if (targetElement !== null) {
        window.scrollTo({
          top: targetElement.offsetTop - 120,
          behavior: "smooth",
        });
      }
    }
  }, []);
  return (
    <>
      <Head>
        <title>Dhara kachhadiya</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Varela+Round&family=Caprasimo&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main>
        <Header />
        <Banner />
        <About />
        <Experience />
        <Resume />
        <Contact />
      </main>
    </>
  );
}
