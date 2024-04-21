import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { HeroParallax } from "~/components/ui/hero";
import { HeroHighlight, Highlight } from "~/components/ui/highlight";
import { motion } from "framer-motion";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const products = [
  "/scroll/1.png",
  "/scroll/2.png",
  "/scroll/3.png",
  "/scroll/1.png",
  "/scroll/4.avif",
  "/scroll/5.webp",
  "/scroll/6.jpg",
  "/scroll/7.jpg",
  "/scroll/8.png",
  "/scroll/9.avif",
];


export default function Index() {
  const [blobPosition, setBlobPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseMove = (event) => {
    setBlobPosition({ x: event.pageX, y: event.pageY });
    setIsHovering(true)
  };


  return (
    <div className="w-screen h-min-screen ">
      <div className="w-full  h-screen flex justify-center items-center" style={{ background: "linear-gradient(to bottom right, #09090baa, #09090b99 60%, #09090b77), url('./header.jpg')", backgroundSize: "cover", clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)", backgroundPosition: "top center", }}>
        <div className="content">
          <header className="flex flex-col items-center justify-center mb-4">
            <h1 className="text-[0.9rem] sm:text-[1.4rem] text-right font-light text-darkfg">CELEBRATING TWO SUCCESSFUL DECADES OF THE</h1>
            <h1 className="text-[6.5rem] sm:text-[10rem] -mb-[2rem] sm:-mb-[3rem] -mt-[1.5rem] text-center leading-0 font-extrabold text-gray-200">SILICO</h1>
            <h1 className="text-[0.9rem] sm:text-[1.4rem] text-right font-light text-gray-200 self-end mr-8 sm:mr-4">BATTLES V20.1</h1>
            <div className="flex justify-center items-center gap-4 mt-8">
              <a href="#" className="makebig sm:px-8 px-4 py-4 sm:py-4 rounded-full bg-accented">REGISTER NOW</a>
              <a href="#" className="makebig text-zinc-950 sm:px-8 sm:py-4 py-4 px-4 rounded-full bg-gray-200">GET THE BROCHURE</a>
            </div>
          </header>

        </div>
      </div>
      <div className="w-full mt-48">
        <HeroParallax products={products} />
      </div>
      {isHovering &&
        <div className="custom-trailer absolute z-[97] p-8 bg-white rounded-full" style={{ top: blobPosition.y, left: blobPosition.x }}>

        </div>
      }
      <div className="w-full relative  p-4 md:p-8 lg:p-16">

        <div
          className="absolute inset-0 h-full w-full  bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] -z-[10]"
        ></div>
        <div className="flex justify-center griddy  items-center w-full">

          <div
            onMouseMove={handleMouseMove} onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="grid md-3/4 w-full lg:w-2/3 auto-rows-[240px] grid-cols-3  gap-4">
            <div className={`row-span-1 rounded-xl border-2  z-[98] backdrop-blur-3xl border-slate-400/10 relative  p-4 dark:bg-zinc-900/70`}>

            </div>
            <div
              className={`row-span-1 col-span-2 rounded-xl border-2 z-[98] backdrop-blur-3xl	 border-slate-400/10 relative  p-4 dark:bg-zinc-900/70`}
            ></div>
            <div
              className={`row-span-1 col-span-2 rounded-xl border-2 z-[98] backdrop-blur-3xl	 border-slate-400/10 relative  p-4 dark:bg-zinc-900/70`}
            ></div>
            <div
              className={`row-span-1 rounded-xl border-2 z-[98] backdrop-blur-3xl	 border-slate-400/10 relative  p-4 dark:bg-zinc-900/70`}
            ></div>

          </div>
        </div>
      </div>
    </div>
  );
}
