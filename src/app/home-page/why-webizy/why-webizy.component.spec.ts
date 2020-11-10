import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyWebizyComponent } from './why-webizy.component';

describe('WhyWebizyComponent', () => {
  let component: WhyWebizyComponent;
  let fixture: ComponentFixture<WhyWebizyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyWebizyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyWebizyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
