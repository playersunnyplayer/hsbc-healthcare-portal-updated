import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }

  loginForm!: FormGroup;
  
    constructor(private formBuilder: FormBuilder, private router: Router) {
    }

    upcomingAppointments() {
      this.router.navigateByUrl('/upcoming-appointments');
    }

}
