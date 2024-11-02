import EventDispatcher from "../../@sahred/event/event-dispatcher";
import Customer from "../../customer/entities/customer";
import SendConsoleLog1Handler from "../events/handle/send-console-log-1.handler";
import { SendConsoleLog2Handler } from "../events/handle/send-console-log-2.handler";
import SendConsoleLogHandler from "../events/handle/send-console-log.handler";
import Address from "../value-object/address";
import { CustomerChangeAddressEvent } from "./customer-change-address.event.";
import { CustomerCreatedEvent } from "./customer-created.event";

describe('Customer Domain Event Tests', () => {
  it('should create a customer and dispatch a CustomerCreatedEvent', () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler1 = new SendConsoleLog1Handler();
    const eventHandler2 = new SendConsoleLog2Handler();

    const spyConsoleLog = jest.spyOn(console, 'log');

    eventDispatcher.register("CustomerCreatedEvent", eventHandler1);
    eventDispatcher.register("CustomerCreatedEvent", eventHandler2);

    const customer = new Customer('123', 'Jhon')

    eventDispatcher.dispatch(new CustomerCreatedEvent(customer.id, customer.name));

    expect(spyConsoleLog).toHaveBeenCalledWith("Esse é o primeiro console.log do evento: CustomerCreatedEvent");
    expect(spyConsoleLog).toHaveBeenCalledWith("Esse é o segundo console.log do evento: CustomerCreatedEvent");
    spyConsoleLog.mockRestore();
  });


  it('should change address a customer and dispatch a CustomerChangeAddressEvent', () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendConsoleLogHandler();

    const spyConsoleLog = jest.spyOn(console, 'log');

    eventDispatcher.register("CustomerChangeAddressEvent", eventHandler);

    const customer = new Customer('123', 'Jhon');

    const address = new Address('Street', 123, '123456', 'City');
    customer.changeAddress(address);

    eventDispatcher.dispatch(new CustomerChangeAddressEvent(customer.id, customer.name, address.toString()));

    expect(spyConsoleLog).toHaveBeenCalledWith(`Endereço do cliente: ${customer.id}, ${customer.name} alterado para: ${address.toString()}`);
    spyConsoleLog.mockRestore();
  
  })
});
