import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Designation } from '../models/designation.model';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class DesignationService {
  private readonly API_URL = 'http://localhost:3000/Element';
  private missionAnnouncedSource = new Subject<any>();
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();

  // Service message commands
  announceMission(mission: any) {
    this.missionAnnouncedSource.next(mission);
  }

  dataChange: BehaviorSubject<Designation[]> = new BehaviorSubject<Designation[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;

  constructor(private httpClient: HttpClient) { }

  get data(): Designation[] {
    return this.dataChange.value;
  }

  getDialogData() {
    //console.log(this.dialogData);
    return this.dialogData;
  }
  getAllIssues() {

    return this.httpClient.get<Designation>(this.API_URL);
  }



  addIssue(issue: Designation): Observable<Designation> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    console.log(issue);
    return this.httpClient.post<Designation>(this.API_URL, issue, httpOptions)
    // this.dialogData = issue;
  }

  updateIssue(issue: Designation): Observable<Designation> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    const url = this.API_URL + '/' + issue.id;

    return this.httpClient.put<Designation>(url, issue, httpOptions);
  }

  deleteIssue(id: number): Observable<Designation> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
   // alert(id);
    const url = this.API_URL + '/' + id;
    return this.httpClient.delete<Designation>(url, httpOptions);
  }
 
  deleteEmployee(id: number): void {
    // alert(id)
    this.httpClient.delete(this.API_URL + id)
  }
}







