import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { BrokerHome } from './broker/broker-home/broker-home';
import { Register } from './register/register';
import { RegisterEmployer } from './register-employer/register-employer';

const routes: Routes = [
  { path: '', component: Home }, // default route
  { path: 'broker', component: BrokerHome },
  { path: 'register', component: Register },
  {path:'register-employer',component:RegisterEmployer}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
