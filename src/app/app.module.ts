import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { HelpDomManipulationComponent } from './help-dom-manipulation/help-dom-manipulation.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { ElvisOperatorComponent } from './elvis-operator/elvis-operator.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    LifecycleComponent,
    HelpDomManipulationComponent,
    DiretivasComponent,
    ElvisOperatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
