import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
class model {
  username : string;
  password : string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  hideElement =false;
  showElement =true;
  title = 'app';
  username : string;
  password : string;
   usermodel = new model();
  constructor(private router: Router) { }

  ngOnInit() {
  }
/*   login(){
    if(this.usermodel.username == "admin" && this.usermodel.password=="admin"){
     // alert();
      this.router.navigate(['/']);
      this.hideElement=true;
      this.showElement=false;
    }else{
      alert("bye");
      this.usermodel.username = "";
    }    
    } */
}
