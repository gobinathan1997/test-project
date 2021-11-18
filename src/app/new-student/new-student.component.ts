import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

import { ISubject } from '../services/models/subject.model';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.scss']
})
export class NewStudentComponent implements OnInit {
  @Output() save: EventEmitter<ISubject> = new EventEmitter();
   name: string ='';
   code: string ='';
   teachers: string='';
   isInCurrentSem: boolean =false;
  constructor() { }

  ngOnInit(): void {
  }
  
  onSave(){
    const newSubject: ISubject={
      name: this.name,
      code: this.code,
      teachers: this.teachers.split(','),
      isInCurrentSem: this.isInCurrentSem,
      id: 0,
      color: ''
    };
    this.save.emit(newSubject);
  }

}
