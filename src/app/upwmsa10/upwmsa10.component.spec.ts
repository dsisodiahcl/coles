import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Upwmsa10Component } from './upwmsa10.component';

describe('Upwmsa10Component', () => {
  let component: Upwmsa10Component;
  let fixture: ComponentFixture<Upwmsa10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Upwmsa10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Upwmsa10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
