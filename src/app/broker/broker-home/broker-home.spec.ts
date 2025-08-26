import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerHome } from './broker-home';

describe('BrokerHome', () => {
  let component: BrokerHome;
  let fixture: ComponentFixture<BrokerHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrokerHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokerHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
