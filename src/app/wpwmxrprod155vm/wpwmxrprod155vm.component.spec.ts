import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wpwmxrprod155vmComponent } from './wpwmxrprod155vm.component';

describe('Wpwmxrprod155vmComponent', () => {
  let component: Wpwmxrprod155vmComponent;
  let fixture: ComponentFixture<Wpwmxrprod155vmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wpwmxrprod155vmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wpwmxrprod155vmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
