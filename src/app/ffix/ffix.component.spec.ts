import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FfixComponent } from './ffix.component';

describe('FfixComponent', () => {
  let component: FfixComponent;
  let fixture: ComponentFixture<FfixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FfixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FfixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
