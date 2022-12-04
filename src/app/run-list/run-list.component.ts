import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Run } from '../run';
import { RunService } from '../run.service';
 
@Component({
 selector: 'run-list',
 templateUrl: './run-list.component.html'
})
export class RunListComponent implements OnInit {
 runs$: Observable<Run[]> = new Observable();
 
 constructor(private runsService: RunService) { }
 
 ngOnInit(): void {
   this.fetchRuns();
 }
 
 private fetchRuns(): void {
   this.runs$ = this.runsService.getRuns();
 }
}