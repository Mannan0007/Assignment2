import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // ✅ correct import
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Home } from './home/home';
import { Footer } from './footer/footer';
import { Contact } from './contact/contact';
import { LowerSection } from './lower-section/lower-section';
import { BrokerHome } from './broker/broker-home/broker-home';
import { Example } from './example/example';
import { Register } from './register/register';
import { FormsModule } from '@angular/forms';
import { RegisterEmployer } from './register-employer/register-employer';

@NgModule({
  declarations: [App, Header, Home, Footer, Contact, LowerSection, BrokerHome, Example, Register, RegisterEmployer],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,ReactiveFormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
  ],
  bootstrap: [App],
})
export class AppModule {}
