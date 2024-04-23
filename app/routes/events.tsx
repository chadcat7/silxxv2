import { motion } from "framer-motion";
import { ImagesSlider } from "~/components/ui/slider";
import { events } from "~/utils/data";
import { DataContext } from "~/root";
import { useContext } from "react";
import { MetaFunction } from "@remix-run/node";
export const meta: MetaFunction = () => {
  return [
    { title: "SILICO BATTLES EVENTS V20.1" },
    { name: "description", content: "All the events in the 20th version of the Silico Battles." },
  ];
};
export default function Events() {
  const images = [
    "/events/1.jpg",
    "/events/2.jpg",
    "/events/3.jpg",
    "/events/4.jpg",
    "/events/5.jpg",
    "/events/6.jpg",
    "/events/7.jpg",
    "/events/8.jpg",
    "/events/9.jpg",
    "/events/10.jpg",
    "/events/12.jpg",
    "/events/11.jpg",
  ];
  const { currentIndex, setCurrentIndex } = useContext(DataContext);
  const handleNext = () => {
    if (setCurrentIndex != undefined) {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
      );
    }
  };

  const handlePrevious = () => {
    if (setCurrentIndex != undefined) {
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  return <>
    <motion.div initial={{ x: "100%" }} animate={{ x: "0%" }} exit={{ opacity: 1 }} transition={{ delay: .3, duration: 1, ease: "easeOut" }} className="min-h-screen">
      <ImagesSlider className="h-screen p-4" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-3xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            {events[currentIndex].title}
          </motion.p>
          <motion.p className="font-light text-md md:text-2xl text-center py-4">
            {events[currentIndex].desc}
          </motion.p>
          <div className="flex gap-4 mt-12 items-center justify-center">
            <img className="cursor-pointer cf" src="/icons/caret-left.svg" onClick={handlePrevious} />
            <img className="cursor-pointer cf" src="/icons/caret-right.svg" onClick={handleNext} />
          </div>
        </motion.div>
      </ImagesSlider>
      <div className="p-4 md:p-12">
        <h1 className="text-accented font-bold text-3xl">Info:</h1>
        <div className="flex mt-6 gap-2 items-center">
          <div className="p-[4px] border-[1px] border-accented rounded-full"></div>
          <div className="text-xl text-gray-100"> Classes Allowed - {events[currentIndex].classes}</div>
        </div>
        <div className="flex mt-6 gap-2 items-center">
          <div className="p-[4px] border-[1px] border-accented rounded-full"></div>
          <div className="text-xl text-gray-100"> Teams Per School - {events[currentIndex].teams}</div>
        </div>
        <div className="flex mt-6 gap-2 items-center">
          <div className="p-[4px] border-[1px] border-accented rounded-full"></div>
          <div className="text-xl text-gray-100"> Participants Per Team - {events[currentIndex].participants}</div>
        </div>
        {events[currentIndex].software &&
          <div className="flex mt-6 gap-2 items-center">
            <div className="p-[4px] border-[1px] border-accented rounded-full"></div>
            <div className="text-xl text-gray-100"> Software To Be Used - {events[currentIndex].software}</div>
          </div>
        }
        <h1 className="text-accented font-bold text-3xl mt-6">Guidelines:</h1>
        <ul className="mt-6">
          {events[currentIndex].rules.map((e, i) => <div key={i} className="flex mt-6 gap-2 items-center">
            <div className="p-[4px] border-[1px] border-accented rounded-full"></div>
            <div className="text-xl text-gray-100">{e}</div>

          </div>)}
        </ul>
      </div>
    </motion.div >
    <motion.div initial={{ x: "100%" }} animate={{ x: "-100%" }} exit={{ opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }} className="fixed top-0 z-[50] bg-accented left-0 h-full w-full">
      <div
        className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      ></div>


    </motion.div>

    <motion.div initial={{ x: "100%" }} animate={{ x: "-100%" }} exit={{ opacity: 1 }} transition={{ delay: .25, duration: 1, ease: "easeOut" }} className="fixed top-0 z-[50] bg-neutral left-0 h-full w-full"></motion.div>

  </>
}
