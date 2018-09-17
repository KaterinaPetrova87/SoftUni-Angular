export class ProductListModel {
  constructor(
    public id: string,
    public name: string,
    public image: string,
    public description: string,
    public price: number,
    public author: string
  ) {}
}