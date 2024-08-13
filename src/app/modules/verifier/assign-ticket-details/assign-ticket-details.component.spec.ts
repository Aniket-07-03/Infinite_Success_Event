import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTicketDetailsComponent } from './assign-ticket-details.component';

describe('AssignTicketDetailsComponent', () => {
  let component: AssignTicketDetailsComponent;
  let fixture: ComponentFixture<AssignTicketDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignTicketDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignTicketDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
