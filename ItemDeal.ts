export default class ItemDeal {
  text: string;
  color: number;
  stamp: Date;
  /*
    класс конструктор, собирает
    нам объект todo с текстом,
    цветом срочности, временем

    */
  constructor(text: string, color: number) {
    this.text = text;
    this.color = color;
    this.stamp = new Date();
  }
}
