import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestItComponent } from './best-it.component';

describe('BestItComponent', () => {
  let component: BestItComponent;
  let fixture: ComponentFixture<BestItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestItComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
