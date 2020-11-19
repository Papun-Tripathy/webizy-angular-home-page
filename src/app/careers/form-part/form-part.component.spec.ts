import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPartComponent } from './form-part.component';

describe('FormPartComponent', () => {
  let component: FormPartComponent;
  let fixture: ComponentFixture<FormPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
