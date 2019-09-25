import { useEffect, useRef } from 'preact/hooks'

// @see https://github.com/donavon/use-event-listener
export default (eventName, handler, element = window) => {
  const savedHandler = useRef(null)

  useEffect(
    () => {
      savedHandler.current = handler
    },
    [handler, savedHandler.current]
  )

  useEffect(
    () => {
      const isSupported = element && element.addEventListener

      if (!isSupported) { return }

      const eventListener = (event) => savedHandler.current(event)
      element.addEventListener(eventName, eventListener)
      return () => {
        element.removeEventListener(eventName, eventListener)
      }
    },
    [eventName, element, savedHandler.current]
  )
}
