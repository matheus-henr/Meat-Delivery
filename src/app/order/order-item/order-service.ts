import {Injectable} from '@angular/core'
import { ShoppingService } from '../../restaurant-detail/shopping-cart/shopping-cart.service';
import { ShoppingCart } from '../../restaurant-detail/shopping-cart/shopping-cart.model';

@Injectable()
export class OrderService{

    constructor(private cartService: ShoppingService){}

    cartItems(): ShoppingCart[]{
        return this.cartService.itens
    }

    increaseQty(item: ShoppingCart){
        this.cartService.increaseQty(item)
    }

    decreaseQty(item: ShoppingCart){
        this.cartService.decreaseQty(item)
    }

    remove(item: ShoppingCart){
        this.cartService.remove(item    )
    }
}