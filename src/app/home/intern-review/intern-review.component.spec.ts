import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternReviewComponent } from './intern-review.component';

describe('InternReviewComponent', () => {
  let component: InternReviewComponent;
  let fixture: ComponentFixture<InternReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
