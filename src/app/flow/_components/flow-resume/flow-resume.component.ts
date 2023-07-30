import { Component, Input } from '@angular/core';

@Component({
  selector: 'fc-flow-resume',
  templateUrl: './flow-resume.component.html',
  styleUrls: ['./flow-resume.component.scss']
})
export class FlowResumeComponent {
  @Input('receipt') receipt: number = 0;
  @Input('expense') expense: number = 0;
  @Input('balance') balance: number = 0;
}
