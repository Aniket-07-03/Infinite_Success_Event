import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignEventListComponent } from './assign-event-list.component';

describe('AssignEventListComponent', () => {
  let component: AssignEventListComponent;
  let fixture: ComponentFixture<AssignEventListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignEventListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
