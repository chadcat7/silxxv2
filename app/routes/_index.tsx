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
  "https://assets-global.website-files.com/5f7c5b7dd36c5bdb23a35350/60663b29ff84192f1a973695_sVS1G6Fhmv8_1Ocxf0nmdqjwSbfYz8n30Kj-O8PradqUzbxV55xM8A2t10z0zcQRjwQg34JK0dQPylD7r99ZSIMkKsrWmz7OhDIYbWbAO543hyQZJCctVQP3A6vCUhi9Tj41p8D0.png",
  "https://helpx.adobe.com/content/dam/help/en/photoshop/get-started/workspace.png",
  "https://cdn.sanity.io/images/s6lu43cv/production-v2/b6a9c9660697ba8770dcd9247fc4c6344ddf7327-6276x3531.png?rect=0,4,6276,3525&w=600&h=337&q=80&auto=format&dpr=2",
  "https://assets-global.website-files.com/5f7c5b7dd36c5bdb23a35350/60663b29ff84192f1a973695_sVS1G6Fhmv8_1Ocxf0nmdqjwSbfYz8n30Kj-O8PradqUzbxV55xM8A2t10z0zcQRjwQg34JK0dQPylD7r99ZSIMkKsrWmz7OhDIYbWbAO543hyQZJCctVQP3A6vCUhi9Tj41p8D0.png",
  "https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2022/10/Valorant-UI.jpg",
  "https://blog.adobe.com/en/publish/2015/10/29/media_1ff65cf2137a2841b88def34bb5f787e32d174a27.png?width=2000&format=webply&optimize=medium",
  "https://www.cnet.com/a/img/resize/392052e32b37387d935e3d3db9795eb5135d6efd/hub/2019/10/21/0b8fbcc3-50fd-4561-8135-f9e6a1e2ed9d/figma-editor.jpg?auto=webp&fit=crop&height=675&width=1200",
  "https://i.ytimg.com/vi/QAKHqYyMxSo/maxresdefault.jpg",
  "https://raw.githubusercontent.com/dark-Jedi2108/nvide/main/.github/screenshots/05.png",
  "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/02/swimming-pool-scene-3d.jpeg",
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
