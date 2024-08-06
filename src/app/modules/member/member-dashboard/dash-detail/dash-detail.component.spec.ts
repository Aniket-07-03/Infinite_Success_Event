import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashDetailComponent } from './dash-detail.component';

describe('DashDetailComponent', () => {
  let component: DashDetailComponent;
  let fixture: ComponentFixture<DashDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
