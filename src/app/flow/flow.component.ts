import { Component } from '@angular/core';
import { FluxoCaixaService } from '../_shared/_service/fluxo-caixa.service';
import { Flow } from '../_domain/_interfaces/flow.model';
import { FlowType } from '../_domain/_enums/flow-type.enum';
import { Period } from '../_domain/_enums/period.enum';

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.scss'],
})
export class FlowComponent {
  flowList: Flow[] = [];
  fullFlowList: Flow[] = [];
  selectedPeriod = 'DIARIO';
  constructor(private flowService: FluxoCaixaService) {
    this.getFlowList(this.selectedPeriod);
    this.getFullFlowList();
  }

  addItem(item: Flow) {
    this.fullFlowList.push(item);
    this.setFlowList(this.fullFlowList);
    this.getFlowList(this.selectedPeriod);
  }

  deleteItem(id: string) {
    this.fullFlowList = this.fullFlowList.filter((flow) => flow.id !== id);
    this.setFlowList(this.fullFlowList);
    this.getFlowList(this.selectedPeriod);
  }

  getFlowList(filter: string): void {
    this.flowList = this.flowService.getListFiltered(filter);
  }

  getFullFlowList(): void {
    this.fullFlowList = this.flowService.getList();
  }

  setFlowList(flows: Flow[]): void {
    this.flowService.set(flows);
  }

  selectedPeriodFilter(period: string) {
    this.selectedPeriod = period;
    this.getFlowList(this.selectedPeriod);
  }

  parsePeriod(period: string) {
    const periodMap: any = {
      DIARIO: 'Diário',
      SEMANAL: 'Semanal',
      MENSAL: 'Mensal',
      ANUAL: 'Anual',
    };

    return periodMap[period];
  }

  get receipt(): number {
    return this.flowList.reduce((acc, flow) => {
      if (flow.type === FlowType.CREDIT) return acc + flow.value;
      else return acc;
    }, 0);
  }

  get expense(): number {
    return this.flowList.reduce((acc, flow) => {
      if (flow.type === FlowType.DEBIT) return acc + flow.value;
      else return acc;
    }, 0);
  }

  get balance(): number {
    return this.receipt - this.expense;
  }
}
