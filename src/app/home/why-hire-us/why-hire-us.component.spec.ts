import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyHireUsComponent } from './why-hire-us.component';

describe('WhyHireUsComponent', () => {
  let component: WhyHireUsComponent;
  let fixture: ComponentFixture<WhyHireUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyHireUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyHireUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
