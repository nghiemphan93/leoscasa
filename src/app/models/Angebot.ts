export class Angebot {
  id?: string;
  title: string;
  price: number;
  desc: string;
  volume?: number;


  constructor(title: string, price: number, desc: string, volume?: number) {
    this.title = title;
    this.price = price;
    this.desc = desc;
    this.volume = volume;
  }
}
