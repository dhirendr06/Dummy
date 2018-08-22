import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {DataService} from '../../../services/data.service';
import {FormControl, Validators} from '@angular/forms';
import {Issue} from '../../../models/issue';

@Component({
  selector: 'app-add.dialog',
  templateUrl: '../../../dialogs/example-table/add/add.dialog.html',
  styleUrls: ['../../../dialogs/example-table/add/add.dialog.css']
})

export class AddDialogComponent {
  errorMessage:string;
  constructor(public dialogRef: MatDialogRef<AddDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Issue,
              public dataService: DataService) { }

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
  // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    this.dataService.addIssue(this.data);
   /* this.dataService.addIssue(this.data as Issue).subscribe( data => {
       this.data = data;
       this.dataService.announceMission(data);
      }, error => this.errorMessage = <any>error);
    
    this.dialogRef.close();*/
    //console.log(this.data);
  }
}
