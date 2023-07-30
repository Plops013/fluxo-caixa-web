import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowComponent } from './flow.component';
import { FlowFormComponent } from './_components/flow-form/flow-form.component';
import { FlowListComponent } from './_components/flow-list/flow-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlowResumeComponent } from './_components/flow-resume/flow-resume.component';

@NgModule({
  declarations: [
    FlowComponent,
    FlowFormComponent,
    FlowListComponent,
    FlowResumeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FlowModule { }
