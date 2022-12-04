import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Run } from '../run';
 
@Component({
 selector: 'run-form',
 templateUrl: './run-form.component.html',
 styles: [
   `.employee-form {
     max-width: 560px;
     margin-left: auto;
     margin-right: auto;
   }`
 ]
})

export class RunFormComponent implements OnInit {
 @Input()
 initialState: BehaviorSubject<Run> = new BehaviorSubject({});
 
 @Output()
 formValuesChanged = new EventEmitter<Run>();
 
 @Output()
 formSubmitted = new EventEmitter<Run>();
 
 runForm: FormGroup = new FormGroup({});
 
 constructor(private fb: FormBuilder) { }
 
 ngOnInit() {
   this.initialState.subscribe(run => {
     this.runForm = this.fb.group({
       location: [ run.location, [Validators.required] ],
       distance: [ run.distance, [ Validators.required] ],
       pace: [ run.pace, [ Validators.required] ],
       elevation: [ run.elevation, [ Validators.required] ],
       calories: [ run.calories, [ Validators.required] ],
       heart_rate: [ run.heart_rate, [ Validators.required] ],
       first_mile: [ run.first_mile, [ Validators.required] ],
       second_mile: [ run.second_mile, [ Validators.required] ],
       third_mile: [ run.third_mile, [ Validators.required] ],
       fourth_mile: [ run.fourth_mile, [ Validators.required] ],
       fifth_mile: [ run.fifth_mile, [ Validators.required] ],
       sixth_mile: [ run.sixth_mile, [ Validators.required] ],
       notes: [ run.notes, [ Validators.required] ],
     });
   });
 
   this.runForm.valueChanges.subscribe((val) => { this.formValuesChanged.emit(val); });
 }
 
 submitForm() {
  console.log("form submitted");
   this.formSubmitted.emit(this.runForm.value);
 }
}