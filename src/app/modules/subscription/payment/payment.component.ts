import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SubscriptionService } from './../../../core/services/subscription.service';
import { ISubscriptionParams } from './../../../core/modeles/subscription-params';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  @Output() changeTabulation: EventEmitter<any> = new EventEmitter<any>()
  creditCardForm: FormGroup=this.createFormPayment();
  subscriptionParams: ISubscriptionParams;
  constructor(
    private fb: FormBuilder,
    private subscriptionService: SubscriptionService,
  ) { 
    this.subscriptionParams = this.subscriptionService.getSubscriptionParams();
  }
  ngOnInit(): void {

  }
  createFormPayment(){
   return this.fb.group({
      number: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      expirationDate: ['', [Validators.required]],
      securityCode: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]]
    });
  }
// set data subscription and to next step
goToNextTabulation(): void {
    if (this.creditCardForm.valid) {
      this.subscriptionService.setPaymentCredentials(this.creditCardForm.value);
      this.changeTabulation.emit({selectedIndex:2,section:"confirmation"})
    }
  }
  //go back to parameters subscription
  goBackToPreviousTabulation(){
    this.changeTabulation.emit({selectedIndex:0,section:"parameters"})
  }
checkFieldValidity(formControl:string){
  return this.creditCardForm.get(formControl)?.invalid && (this.creditCardForm.get(formControl)?.dirty || this.creditCardForm.get(formControl)?.touched)
}
}
