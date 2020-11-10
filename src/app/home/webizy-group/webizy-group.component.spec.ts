import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebizyGroupComponent } from './webizy-group.component';

describe('WebizyGroupComponent', () => {
  let component: WebizyGroupComponent;
  let fixture: ComponentFixture<WebizyGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebizyGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebizyGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
