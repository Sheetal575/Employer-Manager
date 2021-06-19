import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../AppModels/emp.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   url="http://loaclhost:3000/employees";
  constructor(private http:HttpClient) { }

  addEmployee(data:Employee){
    return this.http.post(this.url,data)
  }

  getEmployee(){
    return this.http.get(this.url);
  }

  deleteEmploye(id: any){
    return this.http.delete(`${this.url}/${id}`);
  }

  // updateEmployee(emp:Employee[]){
  //   return this.http.put(`${this.url}/${emp._id}`,emp);
  // }
}
