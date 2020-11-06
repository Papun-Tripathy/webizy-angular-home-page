import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurClentsComponent } from './our-clents.component';

describe('OurClentsComponent', () => {
  let component: OurClentsComponent;
  let fixture: ComponentFixture<OurClentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurClentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurClentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
