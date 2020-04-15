import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Upwmva11Component } from './upwmva11.component';

describe('Upwmva11Component', () => {
  let component: Upwmva11Component;
  let fixture: ComponentFixture<Upwmva11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Upwmva11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Upwmva11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
