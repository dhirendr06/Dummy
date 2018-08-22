import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {DesignationService} from '../../../services/designation.service';
import {FormControl, Validators} from '@angular/forms';
import {Designation} from '../../..//models/designation.model';

@Component({
  selector: 'app-add.dialog',
  templateUrl: '../../../dialogs/designation/add/add.dialog.html',
  styleUrls: ['../../../dialogs/designation/add/add.dialog.css']
})

export class DesignationAddDialogComponent {
  errorMessage:string;
  constructor(public dialogRef: MatDialogRef<DesignationAddDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Designation,
              public designationDataService: DesignationService) { }

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
   // this.dataService.addIssue(this.data);
    this.designationDataService.addIssue(this.data as Designation).subscribe( data => {
       this.data = data;
       this.designationDataService.announceMission(data);
      }, error => this.errorMessage = <any>error);
    
    this.dialogRef.close();
    //console.log(this.data);
  }
}
