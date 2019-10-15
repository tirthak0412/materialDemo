import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Student } from './student';
@Injectable({
  providedIn: 'root'
})
export class StudentdataService {

  constructor(private _http:HttpClient) { }
  url:string="http://localhost:3000/student/";
  getAllStudents(){
    return this._http.get(this.url);
  }
  deleteAllStudent(item:Student[]){
    console.log(item);
    let body=JSON.stringify(item);
    let x=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:x});
  }
}
