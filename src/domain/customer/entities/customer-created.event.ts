import EventInterface from "../../@sahred/event/event.interface";

export class CustomerCreatedEvent implements EventInterface  {
  readonly occurred_on: Date

  constructor(){
      this.occurred_on = new Date();
  }
}