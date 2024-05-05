import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { events } from "~/utils/data";
import { json, redirect, useLoaderData } from "@remix-run/react";


export const loader = async ({
  params
}: LoaderFunctionArgs) => {
  const eventname = params.name
  const ev = events.find(i => i.code === eventname)
  const index = events.findIndex(i => i.code === eventname)
  if (!ev) return redirect("/404")
  return json({ ev, index })
};


export const meta: MetaFunction<typeof loader> = (data) => {
  return [
    { title: `${data.data?.ev?.title} | Silico Battles v20.1` },
    { name: "description", content: "All the events in the Silico Battles." },
  ];
};

export default function SingleEvent() {
  const { ev, index } = useLoaderData<typeof loader>();
  return <>
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="h-[16rem] md:h-[24rem] w-full bg-cover flex justify-center items-end" style={{ background: `linear-gradient(to bottom right, #09090bcc, #09090baa 60%, #09090b99), url('/events/${index + 1}.jpg')`, backgroundSize: "cover", clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)", backgroundPosition: "center", }} >

        <h1 className="mb-12 font-bold text-4xl md:text-5xl">{ev?.title}</h1>

      </div>
      <div className="py-4 lg:w-1/2 md:2/3 w-full">
        <div className="p-4 min-h-screen md:p-12">
          <h1 className="text-accented font-bold text-2xl md:text-3xl">Info:</h1>

          <div className="flex mt-6 gap-2 items-center">
            <div className="p-[4px] border-[1px] border-accented rounded-full"></div>
            <div className="text-md md:text-xl  text-gray-100"> Classes Allowed - {ev?.classes}</div>
          </div>
          <div className="flex mt-6 gap-2 items-center">
            <div className="p-[4px] border-[1px] border-accented rounded-full"></div>
            <div className="text-md md:text-xl  text-gray-100"> Teams Per School - {ev?.teams}</div>
          </div>
          <div className="flex mt-6 gap-2 items-center">
            <div className="p-[4px] border-[1px] border-accented rounded-full"></div>
            <div className="text-md md:text-xl text-gray-100"> Participants Per Team - {ev?.participants}</div>
          </div>
          {ev?.software &&
            <div className="flex mt-6 gap-2 items-center">
              <div className="p-[4px] border-[1px] border-accented rounded-full"></div>
              <div className="text-md md:text-xl  text-gray-100"> Software To Be Used - {ev?.software}</div>
            </div>
          }
          <h1 className="text-accented font-bold text-2xl md:text-3xl mt-6">Guidelines:</h1>
          <ul className="mt-6">
            {ev?.rules.map((e, i) => <div key={i} className="flex mt-6 gap-2">
              <div className="p-[4px] border-[1px] border-accented rounded-full self-start mt-[10px]"></div>
              <div className="text-md md:text-xl  text-gray-100">{e}</div>

            </div>)}
          </ul>
        </div>

      </div>
    </div>
  </>
}
