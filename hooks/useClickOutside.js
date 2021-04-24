import { useEffect, useState, useRef } from "react";

const useClickOutside = () => {
  const ref = useRef();
  const [clickedOutside, setClickedOutside] = useState(false);

  const handleClickOutside = (e) => {
    if (ref && ref.current) {
      if (ref.current.contains(e.target)) {
        setClickedOutside(false);
      } else {
        setClickedOutside(true);
      }
    }
  };

  useEffect(() => {
    if (window.PointerEvent) {
      document.addEventListener("pointerdown", handleClickOutside);
    } else {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      if (window.PointerEvent) {
        document.addEventListener("pointerdown", handleClickOutside);
      } else {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);
      }
    };
  }, []);

  return [ref, clickedOutside];
};

export default useClickOutside;
