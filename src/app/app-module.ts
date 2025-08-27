import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Home } from './home/home';
import { Footer } from './footer/footer';
import { Contact } from './contact/contact';
import { LowerSection } from './lower-section/lower-section';
import { BrokerHome } from './broker/broker-home/broker-home';
import { Example } from './example/example';

@NgModule({
  declarations: [App, Header, Home, Footer, Contact, LowerSection, BrokerHome, Example],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
  ],
  bootstrap: [App],
})
export class AppModule {}
