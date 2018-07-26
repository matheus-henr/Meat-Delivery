import { ShoppingCart } from "./shopping-cart.model";
import { MenuItem } from "../menu-item/menu-item.model";
import { Injectable } from "@angular/core";
import { NotificationService } from "../../shared/messages/snackbar/notification.service";

@Injectable()
export class ShoppingService{

   itens: ShoppingCart[] = []

    constructor(private notification: NotificationService){}

    clear(){
       this.itens = []
    }

    add(item: MenuItem){
        let foundItem = this.itens.find((mItem) => mItem.menuItem.id === item.id)
        if(foundItem){
            this.increaseQty(foundItem)
            this.notification.notify(`Você adicionou o item ${item.name}`)
        }else{
            this.itens.push(new ShoppingCart(item))
        }
    }

    remove(item:ShoppingCart){
        this.itens.splice(this.itens.indexOf(item),1)
        this.notification.notify(`Você removeu o item ${item.menuItem.name}`)
    }

    total(): number{
         return this.itens.map(item => item.value())
            .reduce((prev, value) => prev + value, 0)
    }

    increaseQty(item: ShoppingCart){
      item.quantity = item.quantity + 1
    }

    decreaseQty(item: ShoppingCart){
        item.quantity = item.quantity - 1
        if(item.quantity === 0) this.remove(item)
      }
}
