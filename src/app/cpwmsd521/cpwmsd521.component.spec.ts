import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cpwmsd521Component } from './cpwmsd521.component';

describe('Cpwmsd521Component', () => {
  let component: Cpwmsd521Component;
  let fixture: ComponentFixture<Cpwmsd521Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cpwmsd521Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cpwmsd521Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
