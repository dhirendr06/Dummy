import { Component, OnInit } from '@angular/core';
import { routerTransition1 } from "../../../../shared/router.animation";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styles: [],
   animations: [routerTransition1()],  
  host: {'[@routerTransition]': ''}
})
export class ReportsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
