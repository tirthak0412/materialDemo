import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class EmployeedataService {

  url:string="http://localhost:3000/employee/";
  constructor(private _http:HttpClient) { }
  getAllEmployee()
  {
    return this._http.get(this.url);
  }
}
