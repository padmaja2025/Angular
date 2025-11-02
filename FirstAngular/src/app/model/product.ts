export class Product {

    public productid: number =101;
    public name:string = "Laptop";
    public price:number = 45000;
 
  constructor(productid:number,name:string,price:number)
  {
    this.productid = productid;
    this.name = name;
    this.price = price;
  }

}
