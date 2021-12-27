import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { book } from 'src/app/services/user.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  books: book[] = []; 
  public searchText :any;
  displayedColumns: string[] = ['bookId','title', 'author', 'category','price'];
   
  
  constructor( private authService:AuthService) { }

  ngOnInit(): void {

     this.authService.getBooks().subscribe( data=> {
       this.books= data
     })
  }

}
