import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter
 
} from '@angular/core';
import { Subject } from 'rxjs';
// import { EventEmitter } from 'stream';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit
    
   
    
{
  @Input() subject: any ='Default Subject';
  @Output() delete: EventEmitter<number> = new EventEmitter();
  constructor() {}
  ngOnInit():void{

  
  }
  onDelete(subjectId: number): void {
    this.delete.emit(subjectId);

  }
}
