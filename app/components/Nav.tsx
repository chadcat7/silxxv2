import { useState } from "react"

export function Nav() {
  const [open, setOpen] = useState(false)
  return <>
    <a href="/" className="absolute cursor-pointer top-8 lg:top-16 left-8 lg:left-16">
      <img src="./logo.png" className="h-16" />
    </a>
    <div onClick={() => setOpen(!open)} className="fixed cursor-pointer top-8 lg:top-16 z-[100] rounded-full right-8 lg:right-16 h-16 w-16 bg-white flex justify-center items-center">
      <div className={`flex justify-center items-center transition ${open ? 'gap-0' : 'gap-2'} flex-col`}>
        <div className={`${open && "-rotate-45"} transition w-8 h-[2px] bg-zinc-950`}></div>
        <div className={`${open ? 'w-8 -translate-y-[2px] rotate-45' : 'w-6'} transition h-[2px] bg-zinc-950`}></div>
      </div>
    </div>
    <div className={`${open ? 'translate-x-0' : 'translate-x-[200vw]'} transition duration-300 h-screen top-0 left-0 w-screen fixed bg-zinc-900 z-[99]`}>

      <div
        className="absolute inset-0 h-full w-full  bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] -z-[10]"
      ></div>
    </div>
    <div className={`${open ? 'translate-x-0' : 'translate-x-[200vw]'} delay-[2000s] duration-1000	 h-screen top-0 left-0 w-screen fixed bg-accented z-[99]`}>


    </div>
  </>
}
