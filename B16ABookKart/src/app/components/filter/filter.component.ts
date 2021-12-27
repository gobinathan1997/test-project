import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  public bookList: any;
  public filterCategory: any;
  public searchText: any;
  max!: 100; min!: 0; step=5; thumbLabel=true; value!: number;

  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
    this.authservice.getBooks().subscribe((res) => {
      this.bookList = res;
      this.filterCategory = res;
    });
  }
  filter(category: string) {
    this.filterCategory = this.bookList.filter((c: any) => {
      if (c.category == category || category == '') {
        return c;
      }
    });
  }

  
  formatLabel(value: number) {
    if (value >= 5) {
      return Math.round(value / 5) + 'k';
    }
    return value;
  }

  onSliderChange(event: MatSliderChange) {
    console.log(event.value);
  }


}
