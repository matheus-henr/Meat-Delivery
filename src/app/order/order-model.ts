class Order{
 constructor(
     public id :string,
     public address: string,
     public number: number,
     public optionalAdress: string,
     public orderItem: OrderItem[] = []
 ){}
}

class OrderItem{
    constructor(public quantity: number, public menuId: string){}
}

export{Order, OrderItem}