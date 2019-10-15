import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentdataService } from './studentdata.service';
import { Student } from './student';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { StudentviewmoredialogComponent } from './studentviewmoredialog/studentviewmoredialog.component';

@Component({
  selector: 'app-studentdisplay',
  templateUrl: './studentdisplay.component.html',
  styleUrls: ['./studentdisplay.component.css']
})
export class StudentdisplayComponent implements OnInit {
  dataSource:MatTableDataSource<Student>;
  displayedColumns:string[]=['delete','name','mob_no','action'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _data:StudentdataService,
      public _dialog:MatDialog) {
    this.dataSource=new MatTableDataSource();
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onEdit(row){
    this._dialog.open(StudentviewmoredialogComponent,{
      data:row
    });
  }


  ngOnInit() {

    this._data.getAllStudents().subscribe(
      (data:Student[])=>{
          this.dataSource.data=data;
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
      }
    );
  }
  arrData:Student[];
  i:number;
  addRow(item:Student)
  {
      //this.i=item.roll_no;
      this.arrData.push(item);
      console.log(this.arrData);
  }
  onDeleteAll()
  {
      this._data.deleteAllStudent(this.arrData).subscribe(
      (data:any[])=>{
        console.log(data);
       console.log(this.arrData);
       //this.dataSource.data=data;
      }
      )
  }

}
