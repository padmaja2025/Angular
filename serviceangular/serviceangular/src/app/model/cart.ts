export class Cart {

    constructor(public cartid:number=0,
        public productid:number=0,
        public productname:string='',
        public price:number=0,
        public quantity:number=0,
        public totalprice:number=0,
        public userid:number=0,
    ){}
    
}
