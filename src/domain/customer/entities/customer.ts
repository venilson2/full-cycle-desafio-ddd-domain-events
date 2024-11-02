import { AgreggateRoot } from "../../@sahred/domain/aggregate-root";
import Address from "../value-object/address";
import { CustomerChangeAddressEvent } from "./customer-change-address.event.";
import { CustomerCreatedEvent } from "./customer-created.event";

export default class Customer extends AgreggateRoot {
  private _id: string;
  private _name: string = "";
  private _address!: Address;

  constructor(id: string, name: string) {
    super();
    this._id = id;
    this._name = name;
    this.validate();
  }

  static create(id: string, name: string) {
    const customer = new Customer(id, name);
    customer.addEvent(new CustomerCreatedEvent());
    return customer
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error("Id is required");
    }
    if (this._name.length === 0) {
      throw new Error("Name is required");
    }
  }

  get Address(): Address {
    return this._address;
  }

  set Address(address: Address) {
    this._address = address;
  }

  changeAddress(address: Address) {
    this._address = address;
    this.validate();
    this.addEvent(new CustomerChangeAddressEvent(this.id, this.name, address.toString()));
  }
}
