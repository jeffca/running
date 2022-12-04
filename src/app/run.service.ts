import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Run } from './run';
 
@Injectable({
 providedIn: 'root'
})
export class RunService {
 private url = 'http://localhost:5200';
 private runs$: Subject<Run[]> = new Subject();
 
 constructor(private httpClient: HttpClient) { }
 
 private refreshRuns() {
   this.httpClient.get<Run[]>(`${this.url}/runs`)
     .subscribe(runs => {
       this.runs$.next(runs);
     });
 }
 
 getRuns(): Subject<Run[]> {
   this.refreshRuns();
   return this.runs$;
 }
 
 getRun(id: string): Observable<Run> {
   return this.httpClient.get<Run>(`${this.url}/runs/${id}`);
 }
 
 createRun(run: Run): Observable<string> {
   return this.httpClient.post(`${this.url}/runs`, run, { responseType: 'text' });
 }
 
 updateRun(id: string, run: Run): Observable<string> {
   return this.httpClient.put(`${this.url}/runs/${id}`, run, { responseType: 'text' });
 }
 
 deleteRun(id: string): Observable<string> {
   return this.httpClient.delete(`${this.url}/runs/${id}`, { responseType: 'text' });
 }
}
