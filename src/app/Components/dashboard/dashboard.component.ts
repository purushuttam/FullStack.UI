import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  countd:any;
  constructor() { }

  ngOnInit(): void {
    // interval(1000).subscribe( count =>{
    //   console.log(count);
    //   this.countd = count;
    // })
  }
  ngOnDestroy(): void {

  }

}
