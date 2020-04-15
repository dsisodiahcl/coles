import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Upwmva10Component } from './upwmva10.component';

describe('Upwmva10Component', () => {
  let component: Upwmva10Component;
  let fixture: ComponentFixture<Upwmva10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Upwmva10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Upwmva10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
