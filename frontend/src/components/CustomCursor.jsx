import { useEffect, useState } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  const [hovering, setHovering] = useState(false);
  const [color, setColor] = useState("#097261");

  useEffect(() => {
    const moveCursor = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    const handleOver = (event) => {
      const interactive = event.target.closest(
        "a, button, input, textarea, [data-cursor]"
      );

      if (interactive) {
        setHovering(true);

        const cursorColor =
          interactive.getAttribute("data-cursor-color");

        if (cursorColor) {
          setColor(cursorColor);
        }
      } else {
        setHovering(false);
        setColor("#097261");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleOver);
    };
  }, []);

  return (
    <>
      <div
        className={`cursor-ring ${hovering ? "hovering" : ""}`}
        style={{
          left: position.x,
          top: position.y,
          borderColor: color,
        }}
      />

      <div
        className={`cursor-dot ${hovering ? "hovering" : ""}`}
        style={{
          left: position.x,
          top: position.y,
          background: color,
        }}
      />
    </>
  );
};

export default CustomCursor;