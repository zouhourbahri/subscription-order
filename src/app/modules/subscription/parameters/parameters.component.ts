import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SubscriptionService } from 'src/app/core/services/subscription.service';
import { ISubscriptionPrices } from 'src/app/core/modeles/subscription-prices';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.scss']
})
export class ParametersComponent implements OnInit {
  @Output() changeTabulation: EventEmitter<any> = new EventEmitter<any>()
  parametersForm:FormGroup=this.createFormParamters();
  subscriptionPricesList:ISubscriptionPrices[] = [];
  storageOptions = [5, 10, 50];

  constructor(private fb: FormBuilder,
     private subscriptionService: SubscriptionService
     ) { }

  ngOnInit(): void {
    this.subscriptionPricesList = this.subscriptionService.getSubscriptionPrices()
    // this.setSubscriptionPrices()
  }
  // generate form parameters
  createFormParamters():FormGroup{
    return this.fb.group({
      duration:  [12, Validators.required],
      storage: [5, Validators.required],
      upfrontPayment: [false, Validators.required],
    })
  }
// set data selectedSubscription prices and params in service
  setSubscriptionPrices():void{
    const selectedSubscriptionPlan=this.subscriptionPricesList.find((item:ISubscriptionPrices)=> item.duration_months==this.parametersForm.get('duration')?.value)
    if(selectedSubscriptionPlan)
    this.subscriptionService.setSelectedSubscriptionPlan(selectedSubscriptionPlan)
    this.subscriptionService.setSubscriptionParams(this.parametersForm.value);
  }
  // go to the next step 'payment data subscription
  goToNextTabulation(): void {
    if (this.parametersForm.valid) {
      this.setSubscriptionPrices();
      this.changeTabulation.emit({selectedIndex:1,section:"payment"})
    }
  }

}
