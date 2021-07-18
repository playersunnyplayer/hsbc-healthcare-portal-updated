import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-terms-popup',
  templateUrl: './terms-popup.component.html',
  styleUrls: ['./terms-popup.component.scss']
})
export class TermsPopupComponent implements OnInit {
  @Output() parentComponent:EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  newCaseFunc() {
    this.parentComponent.emit(true)
  }
}