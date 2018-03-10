import { Component, OnInit } from '@angular/core';
import {ShoppingService} from './shopping-cart.service'
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private cartService: ShoppingService) { }

  ngOnInit() {
  }

  items():any{
    return this.cartService.itens
  }

  total():number{
    return this.cartService.total()
  }

  clear(){
    this.cartService.clear()
  }


remove(item: any){
  this.cartService.remove(item);
}

  addItem(item: MenuItem){
    this.cartService.add(item)
  }

}
