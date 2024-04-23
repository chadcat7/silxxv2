import { MetaFunction } from "@remix-run/node";
import { Member } from "~/components/Member";
import { motion } from "framer-motion";

export const meta: MetaFunction = () => {
  return [
    { title: "SILICO BATTLES CORE TEAM V20.1" },
    { name: "description", content: "Team members of the 20th version of the Silico Battles." },
  ];
};
export default function Team() {
  return <>
    <motion.div initial={{ x: "100%" }} animate={{ x: "0%" }} exit={{ opacity: 1 }} transition={{ delay: .3, duration: 1, ease: "easeOut" }} className="px-4 py-32 md:px-12 md:py-48">
      <h1 className="text-3xl md:text-5xl mb-12 font-bold text-center">The <span className="text-accented">CORE TEAM</span></h1>
      <div className="min-h-screen w-full flex justify-center ">
        <div className="flex w-full flex-wrap justify-center">
          <Member name="Namish Pande" username="chadcat7" role="President" quote="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." pfp="/pfps/namish.jpeg" />
          <Member name="Namish Pande" username="chadcat7" role="President" quote="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." pfp="/pfps/namish.jpeg" />
          <Member name="Namish Pande" username="chadcat7" role="President" quote="Lorem ipsum dolorbore adipisicing minim sint cillum sint consectetur cupidatat." pfp="/pfps/namish.jpeg" />
          <Member name="Namish Pande" username="chadcat7" role="President" quote="Lorem ipsum dolor sit amet, minim sint cillum sint consectetur cupidatat." pfp="/pfps/namish.jpeg" />
          <Member name="Namish Pande" username="chadcat7" role="President" quote="Lorem ipsum dolor sit ametm sint cillum sint consectetur cupidatat." pfp="/pfps/namish.jpeg" />
          <Member name="Namish Pande" username="chadcat7" role="President" quote="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." pfp="/pfps/namish.jpeg" />
          <Member name="Namish Pande" username="chadcat7" role="President" quote="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." pfp="/pfps/namish.jpeg" />
          <Member name="Namish Pande" username="chadcat7" role="President" quote="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." pfp="/pfps/namish.jpeg" />
          <Member name="Namish Pande" username="chadcat7" role="President" quote="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." pfp="/pfps/namish.jpeg" />
          <Member name="Namish Pande" username="chadcat7" role="President" quote="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." pfp="/pfps/namish.jpeg" />
        </div></div>
    </motion.div>
    <motion.div initial={{ x: "100%" }} animate={{ x: "-100%" }} exit={{ opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }} className="fixed top-0 z-[50] bg-accented left-0 h-full w-full">
      <div
        className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      ></div>

    </motion.div>
    <motion.div initial={{ x: "100%" }} animate={{ x: "-100%" }} exit={{ opacity: 1 }} transition={{ delay: .25, duration: 1, ease: "easeOut" }} className="fixed top-0 z-[50] bg-neutral left-0 h-full w-full"></motion.div>
  </>
}
