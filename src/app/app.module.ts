import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NewStudentComponent } from './new-student/new-student.component';
import { FormsModule } from '@angular/forms';
import { SubjectInterceptor } from './services/subject.interceptor';





@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    NewStudentComponent,
 
    
  
  
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  

  ],
  providers: [{ provide : HTTP_INTERCEPTORS, useClass: SubjectInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
