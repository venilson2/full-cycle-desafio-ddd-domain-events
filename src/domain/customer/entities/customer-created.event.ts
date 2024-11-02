import EventInterface from "../../@sahred/event/event.interface";

export class CustomerCreatedEvent implements EventInterface  {
  readonly occurred_on: Date
  readonly id: string;
  readonly name: string;

  constructor(id: string, name: string){
      this.occurred_on = new Date();
      this.id = id;
      this.name = name;
  }
}