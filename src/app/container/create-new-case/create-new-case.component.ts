import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import { SelectPractitionerPopupComponent } from '../select-practitioner-popup/select-practitioner-popup.component';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-create-new-case',
  templateUrl: './create-new-case.component.html',
  styleUrls: ['./create-new-case.component.scss']
})
export class CreateNewCaseComponent {
  primary = "#fc5960";
  
  slidess = [
      {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
      {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'},
      {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
      {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
      {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}
  ];

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(SelectPractitionerPopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }
}
