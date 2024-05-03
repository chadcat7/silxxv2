import { MetaFunction } from "@remix-run/node";
import { Member } from "~/components/Member";
import { motion } from "framer-motion";
import { teamMembers } from "~/utils/data";

export const meta: MetaFunction = () => {
  return [
    { title: "SILICO BATTLES CORE TEAM V20.1" },
    { name: "description", content: "Team members of the 20th version of the Silico Battles." },
  ];
};
export default function Team() {
  return <>
    <div className="min-h-screen w-full flex justify-center ">
      {/*
        <div className="flex w-full sm:w-full md:w-full lg:w-2/3 flex-wrap ">
          {teamMembers.map((e, i) => <Member key={i} name={e.name} username={e.discord} pfp={e.pfp} quote={e.quote} role={e.role} />)}
        </div>
        */}
    </div>
  </>
}
