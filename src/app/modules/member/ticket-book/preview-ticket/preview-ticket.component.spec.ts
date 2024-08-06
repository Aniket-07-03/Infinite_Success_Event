import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewTicketComponent } from './preview-ticket.component';

describe('PreviewTicketComponent', () => {
  let component: PreviewTicketComponent;
  let fixture: ComponentFixture<PreviewTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreviewTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
