import * as React from "react"

const useClickOutside = (): [any, boolean] => {
  const ref = React.useRef(null)
  const [clickedOutside, setClickedOutside] = React.useState(false)

  const handleClickOutside = (
    e: PointerEvent | MouseEvent | TouchEvent
  ): void => {
    if (ref && ref.current) {
      if (ref.current.contains(e.target)) {
        setClickedOutside(false)
      } else {
        setClickedOutside(true)
      }
    }
  }

  React.useEffect(() => {
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
