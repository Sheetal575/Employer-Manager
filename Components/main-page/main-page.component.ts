import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RandomColor } from 'angular-randomcolor';
import { Employee } from 'src/app/AppModels/emp.model';
import { EmployeeService } from 'src/app/AppServices/employee.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private empservice:EmployeeService,private router :Router) { }
  employees: Employee[] = [];
  ngOnInit(): void {
    this.getEmpoyee();
  }

  getEmpoyee(){
    this.empservice.getEmployee().subscribe((res:any)=>{
      this.employees = res;
      
      console.log(this.employees);
    })
  }
  delete(id: any){
    if(confirm('Are you sure you want to delete this employee?')){
       this.empservice.deleteEmploye(id).subscribe((res)=>{
        console.log(res);
        this.getEmpoyee();
      },(err)=>{
        console.log(err);
      })
    }
  }
  // getRandomColor() {
  //   let color = Math.floor(0x1000000 * Math.random()).toString(16);
  //   return '#' + ('000000' + color).slice(-6);
  // }
}
