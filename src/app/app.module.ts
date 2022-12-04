import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

// import { InputsModule } from './inputs/inputs.module';
import { AddRunComponent } from './add-run/add-run.component';
import { RunFormComponent } from './run-form/run-form.component';
import { RunListComponent } from './run-list/run-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRunComponent,
    RunFormComponent,
    RunListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // InputsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
