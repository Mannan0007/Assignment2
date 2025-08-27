import { Component } from '@angular/core';

@Component({
  selector: 'app-broker-home',
  standalone: false,
  templateUrl: './broker-home.html',
  styleUrl: './broker-home.css',
})
export class BrokerHome {
  openIndex: number | null = null;

  toggleDropdown(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }

  
}
