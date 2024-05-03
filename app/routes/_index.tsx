import type { MetaFunction } from "@remix-run/node";
import { HeroParallax } from "~/components/ui/hero";
import { AnimatedTooltip } from "~/components/ui/people";
import { Meteors } from "~/components/ui/meteors";
import EarthCanvas from "~/components/Earth";

export const meta: MetaFunction = () => {
  return [
    { title: "SILICO BATTLES V20.1" },
    { name: "description", content: "Welcome to the 20th version of the Silico Battles." },
  ];
};

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "/pfps/namish.jpeg",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: "/pfps/namish.jpeg",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: "/pfps/namish.jpeg",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image: "/pfps/namish.jpeg",
  },
];


export const products = [
  "/scroll/1.jpg",
  "/scroll/2.jpg",
  "/scroll/3.jpg",
  "/scroll/1.jpg",
  "/scroll/4.jpg",
  "/scroll/5.jpg",
  "/scroll/6.jpg",
  "/scroll/7.jpg",
  "/scroll/8.jpg",
  "/scroll/9.jpg",
];


export default function Index() {

  return (
    <div className="w-screen h-min-screen ">
      <div className="w-full  h-screen flex justify-center items-center" style={{ background: "linear-gradient(to bottom right, #09090bcc, #09090baa 60%, #09090b99), url('./homepage/header.jpg')", backgroundSize: "cover", clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)", backgroundPosition: "top center", }}>
        <div className="content">
          <header className="flex flex-col items-center justify-center mb-4">
            <h1 className="text-[0.9rem] sm:text-[1.4rem] text-right font-light text-darkfg">TO ERR IS A MACHINE, TO GLITCH A HUMAN</h1>
            <h1 className="text-[6.5rem] sm:text-[10rem] -mb-[2rem] sm:-mb-[3rem] -mt-[1.5rem] text-center leading-0 font-extrabold text-gray-200">SILICO</h1>
            <h1 className="text-[0.9rem] sm:text-[1.4rem] text-right font-light text-gray-200 self-end mr-8 sm:mr-4">BATTLES V20.1</h1>
            <div className="flex justify-center items-center gap-4 mt-8">
              <a href="#" className="makebig sm:px-8 px-4 py-4 sm:py-4 rounded-full bg-accented/90">REGISTER NOW</a>
              <a href="#" className="makebig text-zinc-950 sm:px-8 sm:py-4 py-4 px-4 rounded-full bg-gray-200">GET THE BROCHURE</a>
            </div>
          </header>

        </div>
      </div>
      <div className="w-full mt-48">
        <HeroParallax products={products} />
      </div>
      <div className="w-full  p-4 md:p-8 lg:p-16">

        <div
          className="absolute inset-0 h-full w-full  bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] -z-[10]"
        ></div>
        <div className="flex justify-center griddy  items-center w-full">

          <div
            className="grid md-3/4 w-full lg:w-2/3 auto-rows-[280px] grid-cols-3  gap-4">
            <div className={`row-span-1  md:p-8 p-4 flex flex-col justify-end relative col-span-3 md:col-span-1 rounded-xl border-2  z-[98] backdrop-blur-3xl border-slate-400/10 relative  p-0 dark:bg-zinc-900/70 `}>
              <div
                className="absolute  inset-0 h-full w-full bg-[radial-gradient(#444444_1px,transparent_1px)] [background-size:16px_16px]"
              ></div>

              <h1 className="text-3xl font-bold mb-2">40+ Schools</h1>
              <p className="text-lg">100+ Teams. 300+ Students. Battle your way to the top and be the champion.</p>
            </div>

            <div
              className={`row-span-1 relative col-span-3  md:col-span-2 rounded-xl border-2 z-[98] backdrop-blur-3xl flex justify-center items-center	 border-slate-400/10   p-4 dark:bg-zinc-900/70 group`}
            >
              <div className="absolute bottom-0 z-[1235254656] left-0 p-4 bg-zinc-800/90 backdrop-blur-3xl w-full">Compeitions varying of diverse skill sets and age! All aboard!</div>
              <div
                className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
              ></div>
              <div className="content w-full">

                <div className="flex justify-center gap-2">
                  <div className="card relative p-4 w-1/2 md:w-1/3 border-2 bg-zinc-900 border-pink-300 rounded-xl h-[230px] group-hover:rotate-0 transition -rotate-6 translate-x-8 group-hover:translate-x-0 flex-col flex justify-center items-center	">
                    <div
                      className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
                    ></div>
                    <img src="https://i.pinimg.com/564x/41/68/60/416860c571f040a91efe5df421cc9cd3.jpg" alt="a" className="h-16 w-16 rounded-full border-2 border-pink-300" />
                    <p className="text-pink-300 text-lg text-center mt-2">Musician</p>
                  </div>
                  <div className="relative card hidden md:flex p-4 w-1/3 border-2 bg-zinc-900 border-blue-300 rounded-xl h-[230px] flex-col flex justify-center items-center	">
                    <div
                      className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
                    ></div>
                    <img src="/cartoon-pfps/cat.jpeg" alt="a" className="h-16 w-16 rounded-full border-2 border-blue-300" />
                    <p className="text-blue-300 text-lg text-center mt-2">Coder</p>
                  </div>
                  <div className="relatve card p-4 w-1/2 md:w-1/3 border-2 bg-zinc-900 border-orange-300 rounded-xl h-[230px] group-hover:rotate-0 transition rotate-6  -translate-x-8 group-hover:translate-x-0	flex-col flex justify-center items-center	">
                    <div
                      className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
                    ></div>
                    <img src="https://i.pinimg.com/564x/10/cf/20/10cf2054e53b454cf86c233cb1e84f60.jpg" alt="a" className="h-16 w-16 object-cover rounded-full border-2 border-orange-300" />
                    <p className="text-orange-300 text-lg text-center mt-2">VFX Dude</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`row-span-1  col-span-3 md:col-span-2 rounded-xl border-2 z-[98] backdrop-blur-3xl	 border-slate-400/10 relative  p-4 dark:bg-zinc-900/70`}
            >
              <div
                className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
              ></div>
              <div className="flex w-full h-full justify-end  flex-col relative">

                <h1 className="text-3xl mb-4">Brought to you by a team of <span className="text-accented font-bold">ultra talented and very cool people!</span> </h1>
                <div className="div flex items-center">
                  <AnimatedTooltip items={people} />

                  <a href="/team" className="px-3 makebig text-black py-2 bg-accented rounded-full z-[12312]"> → </a>
                </div>

              </div>
            </div>
            <div
              className={`row-span-1 col-span-3  md:col-span-1 overflow-hidden flex-col flex justify-end rounded-xl border-2 z-[98] backdrop-blur-3xl	 border-slate-400/10 relative  p-4 dark:bg-zinc-900/70`}
            >
              <h1 className="text-3xl mb-4">Registrations <span className="text-accented font-bold">Out Now</span></h1>
              <div className="flex gap-4 flex-wrap">
                <a href="/" className="px-4 py-1 makebig text-md rounded-full bg-accented text-black">Register</a>
                <a href="/" className="px-4 py-1 makebig text-md rounded-full bg-white text-black">Brouchure</a>
              </div>
              <Meteors number={10} />
            </div>

          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-4 lg:p-20">
        <div className="relative lg:flex items-center justify-center h-full w-full gap-4">
          <div className="absolute z-[95] lg:relative  border-2 z-[98] backdrop-blur-md	 border-slate-400/10 contact-info p-4 lg:p-12 h-[30rem] lg:h-[40rem] w-full lg:w-1/3 bg-neutral-900/80 rounded-xl"

          >
            <h1 className="text-3xl font-bold">Contact</h1>
            <div className="block py-[0.75px] rounded-xl mt-2 mb-8 bg-neutral-300"></div>
            <p className="uppercase makebig font-light mb-6 text-xl md:text-2xl">PHONE: +91 9868881234</p>
            <p className="uppercase makebig font-light mb-6 text-xl md:text-2xl word-wrap">MAIL : mailaps@school.com</p>
            <p className="uppercase makebig font-light mb-6 text-xl md:text-2xl word-wrap">ADDR : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, ullam.</p>
            <p className="uppercase makebig font-light mb-6 text-xl md:text-2xl">INSTA : @instagramid.com</p>
          </div>

          <div className="relative makebig h-[30rem] lg:h-[50rem] w-full lg:w-1/2 ">
            <EarthCanvas />
          </div>
        </div>
      </div>
    </div>
  );
}
