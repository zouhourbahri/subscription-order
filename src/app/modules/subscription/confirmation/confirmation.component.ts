import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ISubscriptionParams } from './../../../core/modeles/subscription-params';
import { IPayment } from './../../../core/modeles/payment';
import { ISubscriptionPrices } from './../../../core/modeles/subscription-prices';
import { Router } from '@angular/router';
import { SubscriptionService } from 'src/app/core/services/subscription.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  @Output() actionStat: EventEmitter<any> = new EventEmitter<any>()

  subscriptionParams: ISubscriptionParams;
  paymentData: IPayment;
  subscriptionPlan: ISubscriptionPrices;
  totalPrice: number=0;
  termsAndConditions: boolean = false;
  email:string="zouhour.bahri@yahoo.com"

  constructor(private router: Router,private subscriptionService: SubscriptionService) {
    this.subscriptionParams = this.subscriptionService.getSubscriptionParams();
    this.paymentData = this.subscriptionService.getPaymentCredentials();
    this.subscriptionPlan = this.subscriptionService.getSelectedSubscriptionPlan();
   }

  ngOnInit(): void {
    this.calculateCosts();
  }

  // calcule total Price
  calculateCosts(): void {
    this.totalPrice = this.subscriptionService.getTotalPrice();

  }
  onConfirm() {
    // Navigate to the success Subscription
    this.router.navigate(['/confirmation']);
  }
// go back to payment section
  back(){
    this.actionStat.emit({selectedIndex:1,section:"payment"})
  }
}
