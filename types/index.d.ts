import { JSXInternal } from "preact/src/jsx";
import EventHandler = JSXInternal.EventHandler;

declare function useEventListener<T extends Event>(
  eventName: string,
  handler: EventHandler<T>,
  element?: HTMLElement
): void;

export as namespace useEventListener;
export default useEventListener;
