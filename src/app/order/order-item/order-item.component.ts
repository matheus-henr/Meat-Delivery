import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingCart } from '../../restaurant-detail/shopping-cart/shopping-cart.model';

@Component({
  selector: 'mt-order-item',
  templateUrl: './order-item.component.html'
})
export class OrderItemComponent implements OnInit {

 @Input() items: ShoppingCart[]

 @Output() increaseQty = new EventEmitter<ShoppingCart>()
 @Output() drecreaseQty = new EventEmitter<ShoppingCart>()
 @Output() remove = new EventEmitter<ShoppingCart>()

  constructor() { }

  ngOnInit() {
  }

  imitIncreaseQty(item: ShoppingCart){
    this.increaseQty.emit(item)
  }
  imitDrecreaseQty(item: ShoppingCart){
  
    this.drecreaseQty.emit(item)
  }

  imitRemove(item: ShoppingCart){
   
    this.remove.emit(item)
  }

}
