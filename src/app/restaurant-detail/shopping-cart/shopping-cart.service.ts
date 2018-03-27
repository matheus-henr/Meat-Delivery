import { ShoppingCart } from "./shopping-cart.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class ShoppingService{

    
   itens: ShoppingCart[] = []

    clear(){
       this.itens = []
    }

    add(item: MenuItem){
        let foundItem = this.itens.find((mItem) => mItem.menuItem.id === item.id)
        if(foundItem){
            this.increaseQty(foundItem)
        }else{
            this.itens.push(new ShoppingCart(item))
        }
    }

    remove(item:ShoppingCart){
        this.itens.splice(this.itens.indexOf(item),1)
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
