import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { BrokerHome } from './broker/broker-home/broker-home';

const routes: Routes = [
  { path: '', component: Home }, // default route
  {path:'broker',component:BrokerHome},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
