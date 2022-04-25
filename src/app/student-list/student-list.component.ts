import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  studentList: Student[] = [];
  nextID: number = 0;
  sName: string;
  sAge: number;

  constructor(private stdService: StudentService) {}

  ngOnInit() {
    //this.studentList = this.stdService.STUDENTS;
    this.fetchData();
  }

  addNewStudent() {
    //creates new student object, then calls service method to add student
    const newStudent: Student = {
      id: ++this.nextID,
      name: this.sName,
      age: this.sAge,
    };
    this.stdService.addStudent(newStudent).subscribe((data) => {
      console.log(data);
      this.fetchData();
    });
  }

  
  fetchData() {
    this.stdService.getStudents().subscribe((data) => {
      this.studentList = data;
    });
  }

  onClearData() {
    this.studentList = [];
  }
}
