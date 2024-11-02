import EventHandlerInterface from "../../../@sahred/event/event-handler.interface";
import { CustomerCreated } from "../../entities/customer-created.event";

export default class SendConsoleLog1Handler implements EventHandlerInterface<CustomerCreated> {
  handle(customer: CustomerCreated) {
    console.log(`Esse é o primeiro console.log do evento: CustomerCreated`);
  }
}