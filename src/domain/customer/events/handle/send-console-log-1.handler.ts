import EventHandlerInterface from "../../../@sahred/event/event-handler.interface";
import { CustomerCreatedEvent } from "../../entities/customer-created.event";

export default class SendConsoleLog1Handler implements EventHandlerInterface<CustomerCreatedEvent> {
  handle(customer: CustomerCreatedEvent) {
    console.log(`Esse é o primeiro console.log do evento: CustomerCreatedEvent`);
  }
}