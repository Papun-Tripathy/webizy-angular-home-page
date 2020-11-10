import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupWebizyComponent } from './group-webizy.component';

describe('GroupWebizyComponent', () => {
  let component: GroupWebizyComponent;
  let fixture: ComponentFixture<GroupWebizyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupWebizyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupWebizyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
