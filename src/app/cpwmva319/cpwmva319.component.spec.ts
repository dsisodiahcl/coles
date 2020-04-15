import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cpwmva319Component } from './cpwmva319.component';

describe('Cpwmva319Component', () => {
  let component: Cpwmva319Component;
  let fixture: ComponentFixture<Cpwmva319Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cpwmva319Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cpwmva319Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
