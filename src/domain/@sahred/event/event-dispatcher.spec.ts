import SendConsoleLog1Handler from "../../customer/events/handle/send-console-log-1.handler";
import EventDispatcher from "./event-dispatcher";

describe('Domain events tests', () => {
  

  it('should register an event handler', () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendConsoleLog1Handler();
  })

})