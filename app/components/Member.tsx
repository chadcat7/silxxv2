export function Member({ name, username, role, pfp, quote }: { name: string, username: string, role: string, pfp: string, quote: string }) {
  return <div className="card makebig relative group  md:w-1/2 w-full lg:w-1/3 p-2 md:p-2 lg:p-4  h-[25rem] lg:h-[30rem]">
    <div className="w-full relative h-full rounded-xl border-[1px] border-cyan-700 p-4 md:p-8 flex flex-col items-center justify-center">

      <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 transition duration-300 rounded-b-xl left-0 w-full p-8 bg-accented md:bg-amber-700/30">
        <div className="text-right text-md">Discord: {username}</div>
      </div>
      <img src={pfp} alt={name} className="h-32 w-32 rounded-full border-4 border-cyan-700" />
      <div className="username text-xl mt-4">{name.split(" ")[0]} <span className="text-amber-700 font-bold">{name.split(" ")[1]}</span></div>
      <div className="text-md italic text-gray-400">{role}</div>
      <div className="text-md mt-4 text-gray-200 w-[3/4] text-center">{quote}</div>
    </div>
  </div>
}
