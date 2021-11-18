import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { switchMap ,map} from 'rxjs/operators';
import { ISubject } from './models/subject.model';
import { TypeofExpr } from '@angular/compiler';
import { employee } from './models/subject.model';
import { salary } from './models/subject.model';
@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  readonly baseUrl :string ='http://localhost:3000/subject'

  constructor(private http: HttpClient) { }
    getSubject():Observable<ISubject[]> {
      return this.http.get<ISubject[]>(this.baseUrl);
    
  }

  delete(subjectId: number): Observable<any>{
    const url: string=`${this.baseUrl}/${subjectId}`;
    return this.http.delete(url);
  }

  create(newSubject :ISubject):Observable<ISubject>{
    return this.http.post<ISubject>(this.baseUrl,newSubject);
  }

  getEmployee(): Observable<employee> {
    const employee: employee = {
      id: 1, name: 'gobi', department: 'Network', salary: 0
    };
    return of(employee);
  }
   
  getSalary(): Observable<salary> {
    const employee: salary = { employeeId: 1, month: 11, salary: 1000 };
    return of(employee);
  }

  getEmployeeWithSalary(): Observable<employee> {
    return this.getEmployee().pipe(
      switchMap((employee: employee) =>
        this.getSalary().pipe(map((salary: salary) => {
          employee.salary = salary.salary;
          return employee;
        }))
      )
    )
  }
}


