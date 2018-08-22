import { Component, OnInit } from '@angular/core';
import { routerTransition1 } from "../../../../shared/router.animation";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [],
   animations: [routerTransition1()],  
  host: {'[@routerTransition]': ''}
})
export class DashboardComponent implements OnInit {
 


  constructor() { }

  ngOnInit() {
  }

}

