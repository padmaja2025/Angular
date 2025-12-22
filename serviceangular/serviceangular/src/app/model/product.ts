export class Product {
    push(prod: Product) {
      throw new Error('Method not implemented.');
    }

    constructor(public productid:number=0,
        public name:string='',
        public title:string='',
        public price:number=0,
        public description:string='',
        public InStock:boolean = true
    ){

    }
}
