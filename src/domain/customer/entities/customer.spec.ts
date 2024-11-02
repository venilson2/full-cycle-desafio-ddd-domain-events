import SendConsoleLog1Handler from "../events/handle/send-console-log-1.handler";
import { SendConsoleLog2Handler } from "../events/handle/send-console-log-2.handler";
import Customer from "./customer";

describe('Customer unit tests', () => {

  it('should create a customer', () => {
    Customer.create('123', 'John');
  })

  it('should change address of customer', () => {

  })

})