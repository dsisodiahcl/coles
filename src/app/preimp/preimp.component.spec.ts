import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreimpComponent } from './preimp.component';

describe('PreimpComponent', () => {
  let component: PreimpComponent;
  let fixture: ComponentFixture<PreimpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreimpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreimpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
