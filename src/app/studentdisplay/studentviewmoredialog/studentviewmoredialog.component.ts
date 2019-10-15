import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Student } from '../student';

@Component({
  selector: 'app-studentviewmoredialog',
  templateUrl: './studentviewmoredialog.component.html',
  styleUrls: ['./studentviewmoredialog.component.css']
})
export class StudentviewmoredialogComponent implements OnInit {

  name: string = "";
  constructor(public dialogRef: MatDialogRef<StudentviewmoredialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student, ) { }
  onCancelClick() {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.name = this.data.name;
  }

}
