import { Routes,RouterModule } from "@angular/router";
import { EmployeedisplayComponent } from './employeedisplay/employeedisplay.component';
import { EmployeeaddComponent } from './employeedisplay/employeeadd/employeeadd.component';
import { StudentdisplayComponent } from './studentdisplay/studentdisplay.component';

const arr :Routes=[

  {path:'',component:EmployeedisplayComponent},
  {path:'empadd',component:EmployeeaddComponent},
  {path:'student',component:StudentdisplayComponent}

];

export const arr_routing=RouterModule.forRoot(arr);
