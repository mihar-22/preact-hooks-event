// Type definitions for Preact Hooks - Event
// Project: https://github.com/mihar-22/preact-hooks-event
// Definitions by: Rahim Alwer <https://github.com/mihar-22>

import { JSXInternal } from "preact/src/jsx";
import EventHandler = JSXInternal.EventHandler;

declare function useEventListener<T extends Event>(
  eventName: string,
  handler: EventHandler<T>,
  element?: HTMLElement
): void;

export as namespace useEventListener;
export default useEventListener;
