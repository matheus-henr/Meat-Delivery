import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';
import { ShoppingCart } from '../restaurant-detail/shopping-cart/shopping-cart.model';
import { OrderService } from './order-item/order-service';
import{ Order, OrderItem } from './order-model'
import {Router} from '@angular/router'
import 'rxjs/add/operator/map'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery: number = 8

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value:'MON'},
    {label: 'Cartão De Credito', value:'DEB'},
    {label: 'Cartão Refeição', value:'REF'}
  ] 
  

  
  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit() {
  
}

itensValue(): number{
  return this.orderService.itensValue()
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

checkData(item: Order){
  item.orderItem = this.cartItems()
  .map((item:ShoppingCart)=> new OrderItem(item.quantity, item.menuItem.id))
  this.orderService.checkOrder(item)
        .subscribe((orderId: Order) => {
        this.router.navigate(['/order-summary'])
        this.orderService.clear()
        })
  
}

}
