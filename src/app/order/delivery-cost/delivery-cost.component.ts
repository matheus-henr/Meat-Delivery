import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-delivery-cost',
  templateUrl: './delivery-cost.component.html'
})
export class DeliveryCostComponent implements OnInit {

  @Input() delivery: number
  @Input() itensValue: number

  constructor() { }

  ngOnInit() {
  }


  total():number{
    return this.delivery + this.itensValue
  }

}