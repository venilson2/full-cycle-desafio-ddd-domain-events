import { CustomerCreatedEvent } from "../../entities/customer-created.event";

export class SendConsoleLog2Handler {
  handle(customer: CustomerCreatedEvent) {
    console.log(`Esse é o segundo console.log do evento: CustomerCreatedEvent`);
  }
}