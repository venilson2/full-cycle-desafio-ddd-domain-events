import { CustomerCreatedEvent } from "../../customer/entities/customer-created.event";
import SendConsoleLog1Handler from "../../customer/events/handle/send-console-log-1.handler";
import EventDispatcher from "./event-dispatcher";

describe('Domain events tests', () => {
  
  it('should register an event handler', () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendConsoleLog1Handler();

    eventDispatcher.register("CustomerCreatedEvent", eventHandler);

    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"][0]
    ).toMatchObject(eventHandler);

    eventDispatcher.unregisterAll();

    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"]
    ).toBeUndefined();
  })

  it('should dispatch an event handlers', () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendConsoleLog1Handler();
    
    const spyEventHandler = jest.spyOn(eventHandler, "handle");

    eventDispatcher.register("CustomerCreatedEvent", eventHandler);

    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"][0]
    ).toMatchObject(eventHandler);

    const customerCreatedEvent = new CustomerCreatedEvent();

    eventDispatcher.dispatch(customerCreatedEvent);

    expect(spyEventHandler).toHaveBeenCalled();
  })
})