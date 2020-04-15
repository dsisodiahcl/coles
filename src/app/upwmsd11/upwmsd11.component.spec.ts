import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Upwmsd11Component } from './upwmsd11.component';

describe('Upwmsd11Component', () => {
  let component: Upwmsd11Component;
  let fixture: ComponentFixture<Upwmsd11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Upwmsd11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Upwmsd11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
