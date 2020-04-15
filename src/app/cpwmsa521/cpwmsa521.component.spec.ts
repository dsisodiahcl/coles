import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cpwmsa521Component } from './cpwmsa521.component';

describe('Cpwmsa521Component', () => {
  let component: Cpwmsa521Component;
  let fixture: ComponentFixture<Cpwmsa521Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cpwmsa521Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cpwmsa521Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
