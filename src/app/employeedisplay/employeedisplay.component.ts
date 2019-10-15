import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from './employee';
import { EmployeedataService } from './employeedata.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-employeedisplay',
  templateUrl: './employeedisplay.component.html',
  styleUrls: ['./employeedisplay.component.css']
})
export class EmployeedisplayComponent implements OnInit {
  emparr: Employee[] = [];
  displayedColumns: string[] = ['name', 'mno', 'salary', 'img','action'];
  dataSource: MatTableDataSource<Employee>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _data: EmployeedataService) {
    this.dataSource = new MatTableDataSource();
  }
  onDelete(row) {
    alert(row.eid);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit() {

    this._data.getAllEmployee().subscribe(
      (data: Employee[]) => {
        this.emparr = data;
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

}





