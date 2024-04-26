import { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";
export const meta: MetaFunction = () => {
  return [
    { title: "SILICO BATTLES V20.1" },
    { name: "description", content: "Message From The Principle" },
  ];
};
export default function Team() {
  return <> <motion.div initial={{ x: "100%" }} animate={{ x: "0%" }} exit={{ opacity: 1 }} transition={{ delay: .3, duration: 1, ease: "easeOut" }} className="px-4  py-32 md:px-12 md:py-48 flex flex-col gap-4 items-center min-h-screen">
    <div
      className="absolute inset-0 min-h-full w-full  bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] -z-[10]"
    ></div>
    <h1 className="text-3xl md:text-5xl mb-12 font-bold text-center">The <span className="text-accented">PRINCIPLE'S MESSAGE</span></h1>
    <p className="w-2/3 text-2xl leading-[3.2rem] text-gray-200">

      Since its inception, Ahlcon Public School has always curated ideas to amplify students' creativity and magnify their overall development. In this ever evolving environment of education and technology, we proudly offer our young technoholics, a technological extravaganza which endeavours to provide fillip and boost to their hidden talents. Through this platform, we strive to equip the learners with the relevant skills and competencies, such as global awareness, critical and innovative thinking.


    </p>
  </motion.div>
    <motion.div initial={{ x: "100%" }} animate={{ x: "-100%" }} exit={{ opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }} className="fixed top-0 z-[50] bg-accented left-0 h-full w-full">
      <div
        className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      ></div>

    </motion.div>
    <motion.div initial={{ x: "100%" }} animate={{ x: "-100%" }} exit={{ opacity: 1 }} transition={{ delay: .25, duration: 1, ease: "easeOut" }} className="fixed top-0 z-[50] bg-neutral left-0 h-full w-full"></motion.div>
  </>
}

