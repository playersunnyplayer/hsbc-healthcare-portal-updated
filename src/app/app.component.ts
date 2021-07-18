import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'hsbc-healthcare-portal-upated';


    loginForm!: FormGroup;
  
    constructor(private formBuilder: FormBuilder, private router: Router) {
    }

    upcomingAppointments() {
      this.router.navigateByUrl('/case-details');
    }
  
    ngOnInit() { }
}
