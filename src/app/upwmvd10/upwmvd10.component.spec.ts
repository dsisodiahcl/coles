import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Upwmvd10Component } from './upwmvd10.component';

describe('Upwmvd10Component', () => {
  let component: Upwmvd10Component;
  let fixture: ComponentFixture<Upwmvd10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Upwmvd10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Upwmvd10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
