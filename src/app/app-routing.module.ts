import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { MenuComponent } from './menu/menu.component';

 

const routes: Routes = [
  { path: 'CreateStudentComponent', component: CreateStudentComponent },
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[CreateStudentComponent]