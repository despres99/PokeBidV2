
import { CreateAccountComponent } from './user/create-account/create-account.component';
import { MakeSaleComponent } from './sale/make-sale/make-sale.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DescriptionComponent } from './sale/make-sale/description/description.component';
import { AccountComponent } from './common/header/nav-bar/nav-bar/account/account.component';
import { ProfileComponent } from './user/profile/profile.component';
const routes: Routes = [
  {
    path: 'make-sale/:id',
    component: MakeSaleComponent
  },
  {
    path: 'create-account/:email',
    component: CreateAccountComponent
  },
  { path: 'account/:id',
    component: ProfileComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
