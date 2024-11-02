import { CustomerChangeAddress } from "../customer-change-address";

export default class SendConsoleLogHandler {
  handle(customer: CustomerChangeAddress) {
    console.log(`Endereço do cliente: ${customer.id}, ${customer.name} alterado para: ${customer.address}`);
  }
}