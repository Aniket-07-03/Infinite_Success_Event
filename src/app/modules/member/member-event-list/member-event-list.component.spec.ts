import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberEventListComponent } from './member-event-list.component';

describe('MemberEventListComponent', () => {
  let component: MemberEventListComponent;
  let fixture: ComponentFixture<MemberEventListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemberEventListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
