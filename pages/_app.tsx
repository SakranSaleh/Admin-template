import type { AppProps } from "next/app";
import Image from "next/image";

import NextNProgress from "nextjs-progressbar";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      const goTopBtn = document.getElementById("goTop");
      if (window.scrollY > 500) {
        goTopBtn?.classList.remove("hidden");
      } else {
        goTopBtn?.classList.add("hidden");
      }
    });
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <NextNProgress color="#fff" />
      <Component {...pageProps} />

      <div
        id="goTop"
        onClick={scrollToTop}
        className="fixed hidden w-10 h-10 rounded-full bottom-[70px] right-[30px] cursor-pointer"
      >
        <Image
          src="/images/back2top.svg"
          alt="Up Arrow Image"
          fill
          className="object-cover rounded-full"
        />
      </div>
    </>
  );
}
