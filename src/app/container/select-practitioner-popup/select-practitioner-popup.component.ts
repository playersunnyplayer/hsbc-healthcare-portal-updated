import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-select-practitioner-popup',
  templateUrl: './select-practitioner-popup.component.html',
  styleUrls: ['./select-practitioner-popup.component.scss']
})
export class SelectPractitionerPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SelectPractitionerPopupComponent>) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
