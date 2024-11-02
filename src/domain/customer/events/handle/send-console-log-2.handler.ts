import { CustomerCreated } from "../../entities/customer-created.event";

export class SendConsoleLog2Handler {
  handle(customer: CustomerCreated) {
    console.log(`Esse é o segundo console.log do evento: CustomerCreated`);
  }
}