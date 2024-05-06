import { MetaFunction } from "@remix-run/node";
import { Member } from "~/components/Member";
import { teamMembers } from "~/utils/data";

export const meta: MetaFunction = () => {
  return [
    { title: "About | Silico Battles v20.1" },
    { name: "description", content: "All about the Souvenir Club and it's members." },
  ];
};
export default function Team() {
  return <>
    <div className=" w-full flex flex-col justify-center ">
      <div className="w-full  min-h-screen pt-20  flex flex-col justify-center items-center" style={{ background: "linear-gradient(to bottom right, #09090bcc, #09090bbb 60%, #09090b99), url('./homepage/header.png')", backgroundSize: "cover", clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)", backgroundPosition: "top center", }}>
        <div className="mb-2 my-2 backdrop-blur-3xl text-sm md:text-md rounded-full bg-sky-900/10 py-2 px-2 md:px-12 border-[1px] border-amber-400/30">Celebrating Two Decades Of the Silico Battles!</div>
        <div className=" text-[3rem] md:text-[5rem] font-light">Our Mission</div>
        <div className="text-2xl mt-4 mb-6 px-6 text-center">Empowering the future of tech since 2004</div>
        <div className="text-lg text-center w-full md:w-1/2 px-6 md:p-0">
          At Souvenir Club, our aim is to provide the ultimate platform for showcasing the skills and talents of young students. We are committed to nurturing creativity and innovation among our participants. Through latest tools, we give students a chance to shine and succeed in their endeavors.
        </div>
      </div>
      <div className="py-20 flex p-6 md:p-16 justify-center items-center w-full">

        <div className="content flex h-full w-full flex-col items-center justify-between">
          <div className="font-bold text-4xl">Souvenir Club</div>
          <p className="font-light text-xl mt-4 w-full px-0 md:px-6 text-center md:p-0 md:w-1/2">The name of our club is a wordplay on the word "Souvenir" which means a momento or precious memory. And this what the club strives to be. A beautiful and enjoyable memory for core team, the volunteers and the participants.</p>
          <div className="font-bold mt-16 mb-12 text-4xl">Core Team</div>
          <div className="flex w-full sm:w-full md:w-full lg:w-4/5 flex-wrap ">
            {teamMembers.map((e, i) => <Member key={i} name={e.name} username={e.discord} pfp={e.pfp} quote={e.quote} role={e.role} />)}
          </div>
        </div>
      </div>
    </div>
  </>
}
