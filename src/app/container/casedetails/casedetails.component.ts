import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-casedetails',
  templateUrl: './casedetails.component.html',
  styleUrls: ['./casedetails.component.scss']
})
export class CasedetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  details() {
    this.router.navigateByUrl('/benefit-request');
  }

}
