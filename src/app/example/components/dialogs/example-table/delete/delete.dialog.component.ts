import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {DataService} from '../../../services/data.service';


@Component({
  selector: 'app-delete.dialog',
  templateUrl: '../../../dialogs/example-table/delete/delete.dialog.html',
  styleUrls: ['../../../dialogs/example-table/delete/delete.dialog.css']
})
export class DeleteDialogComponent {
errorMessage: String;
  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public dataService: DataService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
   // this.dataService.deleteIssue(this.data.id);
  // alert(this.data.id+" ::this.data.id")
     this.dataService.deleteIssue(this.data.id);
  }
}
