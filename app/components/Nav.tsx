import { useState } from "react"
import { AnimatePresence, motion } from 'framer-motion';
import { slide } from "~/utils/anim";

function Curve() {

  const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`
  const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`

  const curve = {
    initial: {
      d: initialPath
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    }
  }

  return (
    <svg className="svgCurve">
      <motion.path variants={curve} initial="initial" animate="enter" exit="exit"></motion.path>
    </svg>
  )
}

export function Nav() {
  const [open, setOpen] = useState(false)
  return <>
    <a href="/" className="absolute makebig  top-8 lg:top-16 left-8 lg:left-16">
      <img src="/logo.png" className="h-12 lg:h-16" />
    </a>
    <div onClick={() => setOpen(!open)} className="fixed cursor-none makebig top-8 lg:top-16 z-[100] rounded-full right-8 lg:right-16  h-12 lg:h-16 w-12 lg:w-16 bg-white flex justify-center items-center">
      <div className={`flex justify-center items-center transition ${open ? 'gap-0' : 'gap-2'} flex-col`}>
        <div className={`${open && "-rotate-45"} transition w-6 lg:w-8 h-[2px] bg-zinc-950`}></div>
        <div className={`${open ? 'w-6 lg:w-8 -translate-y-[2px] rotate-45' : 'w-4 lg:w-6'} transition h-[2px] bg-zinc-950`}></div>
      </div>
    </div>
    <AnimatePresence mode="wait">
      {open && <motion.div variants={slide} className="bg-zinc-950 z-[99] p-6 lg:p-24 fixed right-0 top-0 h-screen w-full lg:w-1/3 " initial="initial" animate="enter" exit="exit">
        <p className="text-2xl text-gray-300">NAVIGATION</p>
        <div className="py-[0.2px] my-6 lg:my-8 bg-zinc-700"></div>
        <motion.div variants={slide} initial="initial" animate="enter" exit="exit" className="links text-zinc-300 flex flex-col gap-4">
          <a href="/" className="text-5xl mb-2 makebig font-bold transition hover:text-accented">HOME</a>
          <a href="/events" className="text-5xl mb-2 makebig font-bold transition hover:text-accented">THE EVENTS</a>
          <a href="/about" className="text-5xl mb-2 makebig font-bold transition hover:text-accented">ABOUT</a>
          <a href="/" className="text-5xl mb-2 makebig font-bold transition hover:text-accented">BROCHURE</a>
          <a href="/" className="text-5xl mb-2 makebig font-bold transition hover:text-accented">REGISTER</a>
          <a href="/" className="text-5xl mb-2 makebig font-bold transition hover:text-indigo-400">DISCORD</a>
        </motion.div>
        <Curve />
      </motion.div>}
    </AnimatePresence>
  </>
}
