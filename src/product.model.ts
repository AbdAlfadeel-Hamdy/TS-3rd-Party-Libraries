export class Product {
  constructor(public title: string, public price: number) {}
  getInformation(): string[] {
    return [this.title, `$${this.price}`];
  }
}
