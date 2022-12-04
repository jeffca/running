import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Run } from '../run';
import { RunService } from '../run.service';
 
@Component({
 selector: 'add-run',
 template: `
   <h2 class="text-center m-5">Add a New Run</h2>
   <run-form (formSubmitted)="addRun($event)"></run-form>
 `
})
export class AddRunComponent {
 constructor(
   private router: Router,
   private runService: RunService
 ) { }
 
 addRun(run: Run) {
   this.runService.createRun(run)
     .subscribe({
       next: () => {
         this.router.navigate(['/runs']);
       },
       error: (error) => {
         alert("Failed to create run");
         console.error(error);
       }
     });
 }
}