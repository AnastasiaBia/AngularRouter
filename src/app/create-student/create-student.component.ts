import { Component, OnInit } from '@angular/core';
import { Student } from '../entities/student';
import { Course } from '../entities/course';
import { HttpClient } from '@angular/common/http';
import { CourseService } from '../course.service';
@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {
name:string;
surname:string;
age:number;

title:string;
body:string;
userId:number;

createStudent(){
  let st = new Student();
  st.name = this.name;
  st.surname = this.surname;
  st.age = this.age;
  console.log(st);
}


createCourse(){
  let course = new Course();
  course.body= this.body;
  course.title = this.title;
  course.userId = this.userId;
this.service.postCourse(course).subscribe(
  (res:any) =>{
    console.log(res)
  })  ;}









  constructor(public service: CourseService) { }
  setValue() { this.name = 'Millie';
                this.surname= 'Smith'; 
              this.age = 35;}
  ngOnInit(): void {
  }

}
