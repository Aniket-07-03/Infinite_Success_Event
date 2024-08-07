import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../../core/event.service';

@Component({
  selector: 'app-member-event-details',
  templateUrl: './member-event-details.component.html',
  styleUrl: './member-event-details.component.css'
})
export class MemberEventDetailsComponent {
  eventData: any;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.eventService.getEventById(id).subscribe((data) => {
      this.eventData = data;
    });
  }

}
