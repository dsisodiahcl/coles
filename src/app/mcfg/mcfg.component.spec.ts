import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McfgComponent } from './mcfg.component';

describe('McfgComponent', () => {
  let component: McfgComponent;
  let fixture: ComponentFixture<McfgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McfgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McfgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
