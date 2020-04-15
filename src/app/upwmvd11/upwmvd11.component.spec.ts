import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Upwmvd11Component } from './upwmvd11.component';

describe('Upwmvd11Component', () => {
  let component: Upwmvd11Component;
  let fixture: ComponentFixture<Upwmvd11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Upwmvd11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Upwmvd11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
