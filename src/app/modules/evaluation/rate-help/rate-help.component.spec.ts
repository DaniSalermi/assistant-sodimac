import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateHelpComponent } from './rate-help.component';

describe('RateHelpComponent', () => {
  let component: RateHelpComponent;
  let fixture: ComponentFixture<RateHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
