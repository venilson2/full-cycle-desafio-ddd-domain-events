import EventDispatcherInterface from "./event-dispatcher.interface";
import EventHandlerInterface from "./event-handler.interface";
import eventInterface from "./event.interface";

export default class EventDispatcher implements EventDispatcherInterface {
  private handlersMap: { [eventName: string]: EventHandlerInterface[] } = {};

  register(eventName: string, handler: EventHandlerInterface): void {
    if (!this.handlersMap[eventName]) {
      this.handlersMap[eventName] = [];
    }
    this.handlersMap[eventName].push(handler);
  }

  dispatch(event: eventInterface): void {
    const eventName = event.constructor.name;
    if (this.handlersMap[eventName]) {
      this.handlersMap[eventName].forEach((handlersMap) => {
        handlersMap.handle(event);
      });
    }
  }
}
