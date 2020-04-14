import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from './entities/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor( public http: HttpClient) { }

  postCourse(course:Course){
    return this.http.post('https://jsonplaceholder.typicode.com/posts',course);
  }
}
