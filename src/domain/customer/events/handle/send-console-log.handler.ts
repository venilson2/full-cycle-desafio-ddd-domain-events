import { CustomerChangeAddressEvent } from "../../entities/customer-change-address.event.";

export default class SendConsoleLogHandler {
  handle(customer: CustomerChangeAddressEvent) {
    console.log(`Endereço do cliente: ${customer.id}, ${customer.name} alterado para: ${customer.address}`);
  }
}