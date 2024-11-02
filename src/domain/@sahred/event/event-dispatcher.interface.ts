import EventHandlerInterface from "./event-handler.interface";
import eventInterface from "./event.interface";

export default interface EventDispatcherInterface {
  register(eventName: string, handler: EventHandlerInterface): void
  dispatch(event: eventInterface): void;
}