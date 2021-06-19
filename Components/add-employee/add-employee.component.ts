import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, Form, NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/AppServices/employee.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private empservice:EmployeeService) { }

  ngOnInit(): void {
  }
  save(employeForm:NgForm){
         if(employeForm.valid){
           this.empservice.addEmployee(employeForm.value)
           .subscribe((res)=>{
             console.log(res);
           },(err)=>{
             console.log(err);
           }
           )
         } 
      employeForm.reset();
  }
}
