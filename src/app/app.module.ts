import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { SubscriptionComponent } from './modules/subscription/subscription.component';
import { PaymentComponent } from './modules/subscription/payment/payment.component';
import { ConfirmationComponent } from './modules/subscription/confirmation/confirmation.component';
import { ParametersComponent } from './modules/subscription/parameters/parameters.component';
import { SubscriptionSuccessComponent } from './modules/subscription-success/subscription-success.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SubscriptionComponent,
    PaymentComponent,
    ConfirmationComponent,
    ParametersComponent,
    SubscriptionSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,SharedModule,HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
