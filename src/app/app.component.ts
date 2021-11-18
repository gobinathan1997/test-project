import { Component, OnInit } from '@angular/core';
import { ISubject } from './services/models/subject.model';
import { SubjectService } from './services/subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'test-project';
  name: string = 'gobi nathan';
  numArray: number[] = [1, 2, 3, 4, 5, 6];
  listOfSubjects: ISubject[] = [];
  showNewSubject:boolean= false;
 
  constructor(private subjectService: SubjectService) {}
  ngOnInit(): void {
    this.getSubjects();
    this.subjectService.getEmployee().subscribe(console.log);
    this.subjectService.getSalary().subscribe(console.log);
    this.subjectService.getEmployeeWithSalary().subscribe(console.log);

  }
  
  getSubjects():void{
    // console.log(this.listOfSubjects);
    this.subjectService.getSubject().subscribe(
      (data) => (this.listOfSubjects = data),
      (error) => console.log(error)
      
    );
  }
  onDelete(subjectId: number) {
    this.subjectService.delete(subjectId).subscribe(
      (data) => this.getSubjects(),
      
      (error) => console.log(error)
    );
  }

  onSave(newSubject:ISubject) {
    console.log(newSubject);
    this.subjectService.create(newSubject).subscribe(
    
    (data)=>{
    this.getSubjects();
    this.showNewSubject =false
    },
    (error)=>console.log(error)

    );
  }


}

