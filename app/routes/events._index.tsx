import React, { useEffect, useRef, useState } from 'react';
import { events } from '~/utils/data';
import { MetaFunction, redirect } from "@remix-run/node";
import { useNavigate } from '@remix-run/react';
export const meta: MetaFunction = () => {
  return [
    { title: "Events | Silico Battles v20.1" },
    { name: "description", content: "All the events in the Silico Battles." },
  ];
};
export default function Events() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      // User is dragging, prevent button click
      event.preventDefault();
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const onTouchUp = () => {
    setIsDragging(false)
  }



  const navigate = useNavigate();
  const handleOnDown = (e: MouseEvent | TouchEvent) => {
    if ('touches' in e) {
      trackRef.current?.setAttribute('data-mouse-down-at', e.touches[0].clientX.toString());
    } else {
      trackRef.current?.setAttribute('data-mouse-down-at', e.clientX.toString());
    }
  };

  const handleClick = (path) => {
    if (!isDragging) {
      console.log("Button clicked!");
      navigate(path)
    }
  };

  const handleOnUp = () => {
    trackRef.current?.setAttribute('data-mouse-down-at', "0");
    trackRef.current?.setAttribute('data-prev-percentage', trackRef.current?.getAttribute('data-percentage') || "0");
  };

  const handleOnMove = (e: MouseEvent | TouchEvent) => {
    if (trackRef.current?.getAttribute('data-mouse-down-at') === "0") return;

    const mouseDelta = parseFloat(trackRef.current?.getAttribute('data-mouse-down-at') || "0") - (e instanceof MouseEvent ? e.clientX : e.touches[0].clientX);
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained = parseFloat(trackRef.current?.getAttribute('data-prev-percentage') || "0") + percentage;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    trackRef.current?.setAttribute('data-percentage', nextPercentage.toString());

    trackRef.current?.animate([
      { transform: `translate(${nextPercentage}%, -50%)` }
    ], { duration: 1200, fill: "forwards" });

    const images = trackRef.current?.getElementsByClassName("image-link2");
    if (images) {
      for (let i = 0; i < images.length; i++) {
        const image = images[i] as HTMLElement;
        image.animate([
          { backgroundPosition: `${100 + nextPercentage}% center` }
        ], { duration: 1200, fill: "forwards" });
      }
    }
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleOnDown);
    window.addEventListener('touchstart', handleOnDown);
    window.addEventListener('mouseup', handleOnUp);
    window.addEventListener('touchend', handleOnUp);
    window.addEventListener('mousemove', handleOnMove);
    window.addEventListener('touchmove', handleOnMove);

    return () => {
      window.removeEventListener('mousedown', handleOnDown);
      window.removeEventListener('mouseup', handleOnUp);
      window.removeEventListener('touchend', handleOnUp);
      window.removeEventListener('mousemove', handleOnMove);
      window.removeEventListener('touchmove', handleOnMove);
    };
  }, []);


  return <>
    <div className="h-screen flex justify-center items-center" style={{ background: "linear-gradient(to bottom right, #09090bcc, #09090bbb 60%, #09090b99), url('./homepage/event.png')", backgroundSize: "cover", clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)", backgroundPosition: "top center", }}>
      <div className="flex-col flex items-center p-4" >

        <div className=" text-[3rem] md:text-[5rem] font-bold">The Events</div>
        <div className="text-lg mt-6 text-center w-full md:w-1/2 px-6 md:p-0">
          Silico Battles consists of total 12 events and 2 rounds. The first round will be conducted in online mode. The duration of the round varies from event to event. Top 8 to 10 selections would be chosen for the final round which would be conducted in our school. May the best school win.
        </div>
      </div>
    </div>
    <div className="min-h-screen relative p-4 w-full md:p-8">
      <span className="text-white text-md text-center">HINT: Drag Right To Left To View More Events</span>
      <div className="image-track" onMouseUp={handleOnUp} onTouchEnd={handleOnUp} ref={trackRef} data-mouse-down-at="0" data-prev-percentage="0">
        {events.map((i, j) => {
          return <span key={j} onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchEnd={onTouchUp}
            className="image-link"><div className="image-link2 relative" style={{ background: `linear-gradient(to right, #00000088,#00000088), url('/events/${j + 1}.jpg')` }}>
              <span onClick={() => handleClick(i.code)} className="absolute pointer-events-auto bg-neutral-900 rounded-xl px-6 py-2 top-4 left-4">More Details</span>
              <span className="titlecard font-bold font-xl uppercase absolute">{i.title}</span>
            </div></span>
        })}
      </div>

    </div>
  </>
}
