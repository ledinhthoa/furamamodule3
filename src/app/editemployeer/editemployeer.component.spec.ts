import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditemployeerComponent } from './editemployeer.component';

describe('EditemployeerComponent', () => {
  let component: EditemployeerComponent;
  let fixture: ComponentFixture<EditemployeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditemployeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditemployeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
