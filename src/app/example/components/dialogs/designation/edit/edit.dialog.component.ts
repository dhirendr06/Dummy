import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {DesignationService} from '../../../services/designation.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-baza.dialog',
  templateUrl: '../../../dialogs/designation/edit/edit.dialog.html',
  styleUrls: ['../../../dialogs/designation/edit/edit.dialog.css']
})
export class DesignationEditDialogComponent {
errorMessage:string;
  constructor(public dialogRef: MatDialogRef<DesignationEditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public designationDataService: DesignationService) { }

  formControl = new FormControl('', [
   // Validators.required
    // Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
    alert();
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
 this.designationDataService.updateIssue(this.data).subscribe( data => {
       this.data = data;
       this.designationDataService.announceMission(data);
      }, error => this.errorMessage = <any>error);
    //console.log(this.data);
    this.dialogRef.close();
  }
}
