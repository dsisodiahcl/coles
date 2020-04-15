import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllprodpageComponent } from './allprodpage.component';

describe('AllprodpageComponent', () => {
  let component: AllprodpageComponent;
  let fixture: ComponentFixture<AllprodpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllprodpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllprodpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
