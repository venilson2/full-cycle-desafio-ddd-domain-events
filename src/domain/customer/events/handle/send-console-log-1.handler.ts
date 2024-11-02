import { CustomerCreated } from "../../entities/customer-created.event";

export default class SendConsoleLog1Handler {
  handle(customer: CustomerCreated) {
    console.log(`Esse é o primeiro console.log do evento: CustomerCreated`);
  }
}