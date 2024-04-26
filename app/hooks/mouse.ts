import { useEffect, useState } from "react";

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [int, setInt] = useState(false)
  useEffect(() => {
    const mouseMoveHandler = (event) => {
      const interactable = event.target.closest(".makebig")
      let interacting = interactable !== null;
      setInt(interacting)
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };
    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return {mousePosition, int};
}

