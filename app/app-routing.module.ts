import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { HeaderComponent } from './Components/header/header.component';
import { MainPageComponent } from './Components/main-page/main-page.component';

const routes: Routes = [
  {
    path:"",
    component:HeaderComponent,
    children:[
      {
         path:"",
         component:MainPageComponent
      },
      {
        path:"add-employee",
        component:AddEmployeeComponent,
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
