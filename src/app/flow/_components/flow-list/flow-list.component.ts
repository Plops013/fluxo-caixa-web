import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Period } from 'src/app/_domain/_enums/period.enum';
import { Flow } from 'src/app/_domain/_interfaces/flow.model';

@Component({
  selector: 'fc-flow-list',
  templateUrl: './flow-list.component.html',
  styleUrls: ['./flow-list.component.scss']
})
export class FlowListComponent {
  @Input('flowList') flowList: Flow[] = [];
  @Output('delete') delete = new EventEmitter<string>();
  @Output('filter') filter = new EventEmitter<Period>();
  selectedFilter: Period = Period.DIARIO;

  constructor() {}

  onDelete(id: string) {
    this.delete.emit(id);
  }

  onSelectFilter(period: Period) {
    this.selectedFilter = period;
    this.filter.emit(period);
  }

  get Period () {
    return Period;
  }
}
