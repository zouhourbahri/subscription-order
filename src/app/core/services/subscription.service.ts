import { Injectable } from '@angular/core';
import { IPayment } from '../modeles/payment';
import { ISubscriptionParams } from '../modeles/subscription-params';
import { ISubscriptionPrices } from './../modeles/subscription-prices';
import subscreptionPrices from '../../../assets/subscription-prices.json'
@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  _subscreptionPrices:ISubscriptionPrices[] =subscreptionPrices
  subscriptionParams:ISubscriptionParams = {
    duration: 12,
    storage: 5,
    upfrontPayment: false
  };
  paymentParams: IPayment = { creditCardNumber: '', expirationDate: '', securityCode: '' };
  subsriptionPrices: ISubscriptionPrices= {
    duration_months: 12,
    price_usd_per_gb: 2
  };
  constructor() { }
    // get list subscriptionPrices
    getSubscriptionPrices(): ISubscriptionPrices[] {
      return this._subscreptionPrices;
    }
    // get subscriptionParams
    getSubscriptionParams(): ISubscriptionParams {
     return this.subscriptionParams
    }
    // update subscriptionParams
    setSubscriptionParams(params: ISubscriptionParams): void {
      this.subscriptionParams.duration = params.duration;
      this.subscriptionParams.storage = params.storage;
      this.subscriptionParams.upfrontPayment = params.upfrontPayment;
    }
    //get PaymentCredentials
    getPaymentCredentials():IPayment {
     return this.paymentParams;
    }
    // update PaymentCredentials
    setPaymentCredentials(newValues: IPayment) {
      this.paymentParams = newValues;
    }
    // get selectedSubscriptionPrices
    getSelectedSubscriptionPlan(): ISubscriptionPrices {
      return this.subsriptionPrices;
    }
    // update selectedSubscriptionPrices
    setSelectedSubscriptionPlan(plan: ISubscriptionPrices): void {
      this.subsriptionPrices = plan;
    }
    // calcule total price
    getTotalPrice(): number {
      let totalPrice =
      this.subsriptionPrices.price_usd_per_gb * this.subscriptionParams.storage * this.subsriptionPrices.duration_months;
      if (this.subscriptionParams.upfrontPayment) {
        totalPrice = totalPrice * 0.9;
      }
      return totalPrice;
    }
}
