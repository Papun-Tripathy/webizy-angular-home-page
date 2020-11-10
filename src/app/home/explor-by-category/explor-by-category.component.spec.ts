import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorByCategoryComponent } from './explor-by-category.component';

describe('ExplorByCategoryComponent', () => {
  let component: ExplorByCategoryComponent;
  let fixture: ComponentFixture<ExplorByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
