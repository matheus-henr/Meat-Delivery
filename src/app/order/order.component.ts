import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';
import { ShoppingCart } from '../restaurant-detail/shopping-cart/shopping-cart.model';
import { OrderService } from './order-item/order-service';
import{ Order, OrderItem } from './order-model'
import {Router} from '@angular/router'
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms'
import 'rxjs/add/operator/map'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery: number = 8
  orderForm: FormGroup

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numeroPattern = /^[0-9]*$/

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value:'MON'},
    {label: 'Cartão De Credito', value:'DEB'},
    {label: 'Cartão Refeição', value:'REF'}
  ] 
  

  
  constructor(private orderService: OrderService, private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.fb.group({
      name: this.fb.control("",[Validators.required, Validators.minLength(5)]),
      email: this.fb.control("",[Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.fb.control("",[Validators.required, Validators.pattern(this.emailPattern)]),
      address: this.fb.control("",[Validators.required, Validators.minLength(5)]),
      number: this.fb.control("",[Validators.required, Validators.pattern(this.numeroPattern)]),
      optionalAdress: this.fb.control(""),
      paymentOption: this.fb.control("",[Validators.required])
    }, {Validator: OrderComponent.equalsTo})
}

static equalsTo(group: AbstractControl): {[Key:string]: boolean}{
  

  const email = group.get('email')
  const emailConfirmation = group.get('emailConfirmation')
  
  if(!email || !emailConfirmation){
   return undefined
  }

  if(email.value !== emailConfirmation.value){ 
    
    return {emailsIsNotMatch:true}
  }
  
  return undefined
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
  console.log(this.orderForm.get('email'))
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
