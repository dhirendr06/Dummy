import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {DesignationService} from '../../../services/designation.service';


@Component({
  selector: 'app-delete.dialog',
  templateUrl: '../../../dialogs/designation/delete/delete.dialog.html',
  styleUrls: ['../../../dialogs/designation/delete/delete.dialog.css']
})
export class DesignationDeleteDialogComponent {
errorMessage: String;
  constructor(public dialogRef: MatDialogRef<DesignationDeleteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public designationDataService: DesignationService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
   // alert(this.data.id)
     this.designationDataService.deleteIssue(this.data.id).subscribe( data => {
       this.data = data;
       console.log(this.data.id);
       this.designationDataService.announceMission(data);
      }, error => this.errorMessage = <any>error);
    this.dialogRef.close();
  }
}
