import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class Product {
  @IsNotEmpty()
  title: string;
  @IsNumber()
  @IsPositive()
  price: number;
  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
  getInformation(): string[] {
    return [this.title, `$${this.price}`];
  }
}
