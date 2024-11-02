export class CustomerCreated {
  readonly occurred_on: Date

  constructor(){
      this.occurred_on = new Date();
  }
}