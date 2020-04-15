import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Upwmsd10Component } from './upwmsd10.component';

describe('Upwmsd10Component', () => {
  let component: Upwmsd10Component;
  let fixture: ComponentFixture<Upwmsd10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Upwmsd10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Upwmsd10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
