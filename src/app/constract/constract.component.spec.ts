import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstractComponent } from './constract.component';

describe('ConstractComponent', () => {
  let component: ConstractComponent;
  let fixture: ComponentFixture<ConstractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
