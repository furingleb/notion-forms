import { useEffect, useState, useRef } from "react"

const useClickOutside = (): [any, boolean] => {
  const ref = useRef(null)
  const [clickedOutside, setClickedOutside] = useState(false)

  const handleClickOutside = (e: PointerEvent | MouseEvent | TouchEvent) => {
    if (ref && ref.current && typeof ref.current === "object") {
      if (ref.current.contains(e.target)) {
        setClickedOutside(false)
      } else {
        setClickedOutside(true)
      }
    }
  }

  useEffect(() => {
    if (window.PointerEvent) {
      document.addEventListener("pointerdown", handleClickOutside)
    } else {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("touchstart", handleClickOutside)
    }

    return () => {
      if (window.PointerEvent) {
        document.removeEventListener("pointerdown", handleClickOutside)
      } else {
        document.removeEventListener("mousedown", handleClickOutside)
        document.removeEventListener("touchstart", handleClickOutside)
      }
    }
  }, [])

  return [ref, clickedOutside]
}

export default useClickOutside
