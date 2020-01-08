import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAppComponent } from './footer-app.component';

describe('FooterAppComponent', () => {
  let component: FooterAppComponent;
  let fixture: ComponentFixture<FooterAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
