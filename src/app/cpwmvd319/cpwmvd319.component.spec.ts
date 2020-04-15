import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cpwmvd319Component } from './cpwmvd319.component';

describe('Cpwmvd319Component', () => {
  let component: Cpwmvd319Component;
  let fixture: ComponentFixture<Cpwmvd319Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cpwmvd319Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cpwmvd319Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
