import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerSection } from './lower-section';

describe('LowerSection', () => {
  let component: LowerSection;
  let fixture: ComponentFixture<LowerSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LowerSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowerSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
