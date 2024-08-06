import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberEventDetailsComponent } from './member-event-details.component';

describe('MemberEventDetailsComponent', () => {
  let component: MemberEventDetailsComponent;
  let fixture: ComponentFixture<MemberEventDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemberEventDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
