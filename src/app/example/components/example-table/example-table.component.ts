import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import { MatPaginator, MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { Issue } from '../models/issue';
import { SelectionModel } from '@angular/cdk/collections';
import { DataService } from '../services/data.service'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { routerTransition1 } from "../../../shared/router.animation";
import { DataSource } from '@angular/cdk/collections';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { AddDialogComponent } from '../dialogs/example-table/add/add.dialog.component';
import { EditDialogComponent } from '../dialogs/example-table/edit/edit.dialog.component';
import { DeleteDialogComponent } from '../dialogs/example-table/delete/delete.dialog.component';
@Component({
  selector: 'app-example-table',
  templateUrl: './example-table.component.html',
  styleUrls: ['./example-table.component.css']
})
export class ExampleTableComponent implements OnInit {
  @ViewChild('filter') filter: ElementRef;
  displayedColumns = ['select', 'position', 'name', 'weight', 'symbol', 'actions'];

  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  selection = new SelectionModel<Element>(true, []);
  index: number;
  id: number;
  fleetData: any;
  dialogData: any;
  constructor(public httpClient: HttpClient,
    public dialog: MatDialog, public dataService: DataService
  ) {

  }

  ngOnInit() {

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

  /**************************************Custom Events*******************************/

  addNew(issue: Issue) {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      data: { issue: issue }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        //  this.dataSource.data.push(this.dataService.getDialogData());
        this.dataSource.data.push(this.dataService.getDialogData());
        this.refreshTable();
      }
    });
  }

  startEdit(i: number, position: number, name: string, weight: number, symbol: string) {
    this.id = position;
    this.index = i;
    // console.log(this.index);
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: { id: position, name: name, weight: weight, symbol: symbol }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.dataSource.data.findIndex(x => x.position === this.id);
        this.dataSource.data[foundIndex] = this.dataService.getDialogData();
        // And lastly refresh table
        this.refreshTable();
      }
    });
  }

  deleteItem(i: number, position: number, name: string, weight: string, symbol: string) {
    this.index = i;
    this.id = position;
    const foundIndex = this.dataSource.data.findIndex(x => x.position === this.id);

    this.dataSource.data.splice(foundIndex, 1);
    //this.refreshTable();
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { id: position, name: name, weight: weight, symbol: symbol }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.dataSource.data.findIndex(x => x.position === this.id);
        // this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
        this.dataSource.data.splice(foundIndex, 1);
        this.refreshTable();
      }
    });
  }
  getDialogData() {
    //console.log(this.dialogData);
    return this.dialogData;
  }
  private refreshTable() {

    this.dataSource.filter = '';
    // this.dataSource.filter = this.filter.nativeElement.value;

  }
  
}



export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


const ELEMENT_DATA: Element[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
  { position: 21, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 22, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 23, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 24, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 25, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 26, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 27, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 28, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 29, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 30, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 31, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 32, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 33, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 34, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 35, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 36, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 37, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 38, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 39, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 40, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];



