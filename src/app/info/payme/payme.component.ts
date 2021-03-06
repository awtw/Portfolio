import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

declare var paypal;

@Component({
  selector: 'app-payme',
  templateUrl: './payme.component.html',
  styleUrls: ['./payme.component.scss']
})
export class PaymeComponent implements OnInit {
  public onClose: Subject<boolean>;
  heartImage = '../../../assets/images/info/heart.png';
  title: string;
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;
  product = {
    price: 100,
    description: '打賞'
  };
  paidFor = false;

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit(): void {
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.product.description,
                amount: {
                  currency_code: 'TWD',
                  value: this.product.price
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          this.paidFor = true;
          console.log(order);
        },
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
  }

  notSave(): void {
    this.bsModalRef.hide();
  }

}
