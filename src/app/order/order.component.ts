import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';
import { ShoppingCart } from '../restaurant-detail/shopping-cart/shopping-cart.model';
import { OrderService } from './order-item/order-service';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value:'MON'},
    {label: 'Cartão De Credito', value:'DEB'},
    {label: 'Cartão Refeição', value:'REF'}
  ] 
  

  
  constructor(private orderService: OrderService) { }

  ngOnInit() {
  
}

  cartItems(): ShoppingCart[]{
    return this.orderService.cartItems()
  }

increaseQty(item: ShoppingCart){
  return this.orderService.increaseQty(item)
}

decreaseQty(item: ShoppingCart){
  return this.orderService.decreaseQty(item)
}

remove(item: ShoppingCart){
 
  this.orderService.remove(item)
}

}
