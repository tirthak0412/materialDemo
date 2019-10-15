import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { arr_routing } from "./app.routing";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule,MatButtonModule, MatTableModule,MatSortModule, MatPaginatorModule, MatCheckboxModule, MatDialogModule } from "@angular/material";
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MainFormComponent } from './main-form/main-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeedisplayComponent } from './employeedisplay/employeedisplay.component';
import { EmployeeaddComponent } from './employeedisplay/employeeadd/employeeadd.component';
import { StudentdisplayComponent } from './studentdisplay/studentdisplay.component';
import { StudentviewmoredialogComponent } from './studentdisplay/studentviewmoredialog/studentviewmoredialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainFormComponent,
    EmployeedisplayComponent,
    EmployeeaddComponent,
    StudentdisplayComponent,
    StudentviewmoredialogComponent
  ],
  imports: [
    BrowserModule,
    arr_routing,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatDialogModule,
  ],
  entryComponents:[
    StudentviewmoredialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
