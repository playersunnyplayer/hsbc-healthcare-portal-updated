import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upcoming-appointments',
  templateUrl: './upcoming-appointments.component.html',
  styleUrls: ['./upcoming-appointments.component.scss']
})
export class UpcomingAppointmentsComponent implements OnInit {

  constructor(private router: Router) {
  }

  details() {
    this.router.navigateByUrl('/case-details');
  }

  ngOnInit(): void {
  }

}
