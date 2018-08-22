import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Issue } from '../models/issue';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class DataService {
  private API_URL = 'http://localhost:3000/Element';

  dataChange: BehaviorSubject<Issue[]> = new BehaviorSubject<Issue[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;

  constructor(private httpClient: HttpClient) { }

  get data(): Issue[] {
    return this.dataChange.value;
  }

  getDialogData() {
    //console.log(this.dialogData);
    return this.dialogData;
  }
  getAllIssues(): Observable<Issue[]> {
    return this.httpClient.get<Issue[]>(this.API_URL);
  }


  addIssue(issue: Issue): void {
    this.dialogData = issue;
  }
  updateIssue(issue: Issue): void {
    this.dialogData = issue;
  }

  deleteIssue(id: number): void {

  }

}







