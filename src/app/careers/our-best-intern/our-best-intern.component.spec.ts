import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBestInternComponent } from './our-best-intern.component';

describe('OurBestInternComponent', () => {
  let component: OurBestInternComponent;
  let fixture: ComponentFixture<OurBestInternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurBestInternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurBestInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
