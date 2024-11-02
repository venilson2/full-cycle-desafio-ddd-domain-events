export default class EventDispatcher {
  private handlersMap: { [eventName: string]: Function[] } = {};

  register(eventName: string, handler: Function) {
    if (!this.handlersMap[eventName]) {
      this.handlersMap[eventName] = [];
    }
    this.handlersMap[eventName].push(handler);
  }

  dispatch(event: any) {
    const eventName = event.constructor.name;
    const handlers = this.handlersMap[eventName] || [];
    handlers.forEach(handler => handler(event));
  }
}
