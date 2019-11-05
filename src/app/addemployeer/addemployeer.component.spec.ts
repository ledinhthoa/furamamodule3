import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddemployeerComponent } from './addemployeer.component';

describe('AddemployeerComponent', () => {
  let component: AddemployeerComponent;
  let fixture: ComponentFixture<AddemployeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddemployeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddemployeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
