import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Testing } from './testing/testing';
import { Home } from './home/home';
import { BrokerHome } from './broker/broker-home/broker-home';

const routes: Routes = [
  { path: '', component: Home }, // default route
  {path:'broker',component:BrokerHome},
  { path: 'auth', component: Testing }, // localhost:4200/auth
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
