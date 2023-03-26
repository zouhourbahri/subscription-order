import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionSuccessComponent } from './modules/subscription-success/subscription-success.component';
import { SubscriptionComponent } from './modules/subscription/subscription.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'subscription',
        pathMatch: 'full'
      },
      {
        path: 'subscription',
        component:SubscriptionComponent
      },
      {
        path: 'confirmation',
        component:SubscriptionSuccessComponent
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
