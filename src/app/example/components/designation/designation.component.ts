import { Component, ViewChild, ElementRef, OnInit,Directive } from '@angular/core';
import { CustomersComponent } from "../../../layout/user/components/admin/customers/customers.component";
import { MatPaginator, MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { Designation } from '../models/designation.model';
import { SelectionModel } from '@angular/cdk/collections';
import { DesignationService } from '../services/designation.service'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { routerTransition1 } from "../../../shared/router.animation";
import { DataSource } from '@angular/cdk/collections';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { DesignationAddDialogComponent } from '../dialogs/designation/add/add.dialog.component';
import { DesignationEditDialogComponent } from '../dialogs/designation/edit/edit.dialog.component';
import { DesignationDeleteDialogComponent } from '../dialogs/designation/delete/delete.dialog.component';
@Component({
  selector: 'app-designation-table',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})

export class DesignationTableComponent implements OnInit {
  @ViewChild('filter') filter: ElementRef;
  displayedColumns = ['select', 'SNo', 'Designation Name', 'actions'];
  dataSource = new MatTableDataSource<Designation[]>();
  selection = new SelectionModel<Designation[]>(true, []);
  index: number;
  id: number;
  fleetData: any;
  dialogData: any;
  public SNo: Array<any> = [];
  arr: Array<any> = [];
  constructor(public httpClient: HttpClient,
    public dialog: MatDialog, public designationDataService: DesignationService
  ) {

  }

  ngOnInit() {
    this.loadData();
    this.designationDataService.missionAnnounced$.subscribe(data => {
      this.loadData();
      // console.log( this.dataSource.data);
    })
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  @ViewChild(MatSort) sort: MatSort;

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }



  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /**************************************Custom Events* */
  refresh() {
    this.loadData();
  }

  addNew(issue: Designation) {
    const dialogRef = this.dialog.open(DesignationAddDialogComponent, {
      data: { issue: issue }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {

      }
    });
  }

  startEdit(i: number, num: number, name: string) {
    this.id = num;
    this.index = i;
    console.log(num);
    const dialogRef = this.dialog.open(DesignationEditDialogComponent, {
      data: { id: this.fleetData[i].id, SNo: num, Designation: name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {

      }
    });
  }

  deleteItem(i: number, num: number, name: string) {

    this.index = i;

    this.id = num;
    //alert(this.id);
    const dialogRef = this.dialog.open(DesignationDeleteDialogComponent, {
      data: { id: this.fleetData[i].id, SNo: num, Designation: name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {

      }
    });
  }
  getDialogData() {

    return this.dialogData;
  }
  private refreshTable() {

    this.dataSource.filter = '';


  }
  public loadData() {
    var ind: any = 0;
    this.designationDataService.getAllIssues().subscribe(data => {
      this.fleetData = data;
      console.log(this.fleetData);



      this.fleetData.forEach((number, index) => this.SNo[index] = index)
      //alert(this.SNo)  //  alert(this.dataSource.data.length);
      /*var i = 0;
      do {
        i += 1;
        
        this.arr.push(i);
      ;console.log(`${index}:${number}`)
      } while (i < this.dataSource.data.length);
      //alert(this.arr.slice(0,6));
      var self;
      for (var i = 0 ;i < this.arr.length; i++) {
       self=i;
       return function(){
      this.SNo=this.arr[self];
       }
         
      }*/


      //alert(ind);
      //var res=ind.split(',');

      //this.SNo=res;

    });


  }

}




