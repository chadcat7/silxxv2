import useMousePosition from "~/hooks/mouse"

export default function CustomCursor() {
  const { mousePosition, int } = useMousePosition()

  return <div id="invertedcursor" style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px`, scale: `${int ? "2" : "1"}` }} className="z-[105] hidden sm:block"></div>
}
