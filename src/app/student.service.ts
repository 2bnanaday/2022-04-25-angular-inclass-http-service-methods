import { Injectable } from "@angular/core";
import { Student } from "./student";
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class StudentService {
  

  constructor(private http: HttpClient) {}

  addStudent(newStd: Student){
    return this.http.post('https://student-11-749b5-default-rtdb.firebaseio.com/' + 'student.json', newStd );
  }

  getStudents(){
    return this.http.get<Student[]>('https://student-11-749b5-default-rtdb.firebaseio.com/' + 'student.json')
      .pipe(map(responseData => {
        const studentList: Student[] = [];
        for(const key in responseData)
          studentList.push(responseData[key]);
          return studentList;
      }))
    ;
  }

  deleteAll(){
    return this.http.delete('https://student-11-749b5-default-rtdb.firebaseio.com/');
  }

}
