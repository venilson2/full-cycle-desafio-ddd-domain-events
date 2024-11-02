export class CustomerChangeAddress {
  readonly occurred_on: Date

  constructor(
      readonly id: string,
      readonly name: string,
      readonly address: string
  ){
      this.occurred_on = new Date();
  }
}