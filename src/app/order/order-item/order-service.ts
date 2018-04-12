import {Injectable} from '@angular/core'
import { ShoppingService } from '../../restaurant-detail/shopping-cart/shopping-cart.service';
import { ShoppingCart } from '../../restaurant-detail/shopping-cart/shopping-cart.model';
import { Order } from '../order-model';
import {Observable} from 'rxjs/Observable'
import { Http, Headers, RequestOptions } from '@angular/http'
import {MEAT_API} from '../../app.api'
import 'rxjs/operator/map'

@Injectable()
export class OrderService{

    constructor(private cartService: ShoppingService, private http: Http){}
    itensValue(): number{
        return this.cartService.total()
    }

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


    clear(){  
        this.cartService.clear()
    }

    checkOrder(order: Order): Observable<Order>{
        const headers = new Headers()
        headers.append('Content-Typer', 'application/json')
        return this.http.post(`${MEAT_API}/orders`,
                             JSON.stringify(order),
                            new RequestOptions({headers: headers}))
         .map(response => response.json())
         
    }

}