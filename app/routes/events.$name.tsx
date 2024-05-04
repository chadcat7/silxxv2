import type { LoaderFunctionArgs, } from "@remix-run/node";
import { events } from "~/utils/data";
import { redirect, useLoaderData } from "@remix-run/react";


export const loader = async ({
  params
}: LoaderFunctionArgs) => {
  const eventname = params.name
  const event = events.find(i => i.code === eventname)
  if (!event) return redirect("/404")
  return { event }
};

export default function SingleEvent() {
  const { event } = useLoaderData<typeof loader>();
  return <>
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="py-32 lg:w-1/2 md:2/3 w-full">
        <div className="p-4 min-h-screen md:p-12">
          <h1 className="mb-6 font-bold text-4xl">Cyquest</h1>
          <h1 className="text-accented font-bold text-3xl">Info:</h1>
          <div className="flex mt-6 gap-2 items-center">
            <div className="p-[4px] border-[1px] border-accented rounded-full"></div>
            <div className="text-xl text-gray-100"> Classes Allowed - {event?.classes}</div>
          </div>
          <div className="flex mt-6 gap-2 items-center">
            <div className="p-[4px] border-[1px] border-accented rounded-full"></div>
            <div className="text-xl text-gray-100"> Teams Per School - {event?.teams}</div>
          </div>
          <div className="flex mt-6 gap-2 items-center">
            <div className="p-[4px] border-[1px] border-accented rounded-full"></div>
            <div className="text-xl text-gray-100"> Participants Per Team - {event?.participants}</div>
          </div>
          {event?.software &&
            <div className="flex mt-6 gap-2 items-center">
              <div className="p-[4px] border-[1px] border-accented rounded-full"></div>
              <div className="text-xl text-gray-100"> Software To Be Used - {event?.software}</div>
            </div>
          }
          <h1 className="text-accented font-bold text-3xl mt-6">Guidelines:</h1>
          <ul className="mt-6">
            {event?.rules.map((e, i) => <div key={i} className="flex mt-6 gap-2">
              <div className="p-[4px] border-[1px] border-accented rounded-full self-start mt-[10px]"></div>
              <div className="text-xl text-gray-100">{e}</div>

            </div>)}
          </ul>
        </div>

      </div>
    </div>
  </>
}
