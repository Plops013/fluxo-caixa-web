import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Flow } from 'src/app/_domain/_interfaces/flow.model';
import { Period } from 'src/app/_domain/_enums/period.enum';

@Injectable({ providedIn: 'root' })
export class FluxoCaixaService {
  FLUXO_KEY = 'FLUXO_CAIXA_LISTA';
  constructor(private storageService: LocalStorageService) {}

  getList(): Flow[] {
    return this.storageService.get(this.FLUXO_KEY);
  }

  getConsolidation(): number {
    return 1;
  }

  getListFiltered(period: string): Flow[] {
    return this.getList().filter((flow) => {
      return new Date(flow.date) >= mapPeriod(period);
    });

    function mapPeriod(period: string) {
      switch (period) {
        case Period.DIARIO.valueOf():
          return today();
        case Period.SEMANAL.valueOf():
          return weekAgo();
        case Period.MENSAL.valueOf():
          return monthAgo();
        case Period.ANUAL.valueOf():
          return yearAgo();
        default:
          return today();
      }
    }

    function today() {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return today;
    }

    function weekAgo() {
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return weekAgo;
    }

    function monthAgo() {
      const monthAgo = new Date();
      monthAgo.setDate(monthAgo.getDate() - 30);
      return monthAgo;
    }

    function yearAgo() {
      const yearAgo = new Date();
      yearAgo.setDate(yearAgo.getDate() - 365);
      return yearAgo;
    }
  }

  set(flows: Flow[]): void {
    this.storageService.set(this.FLUXO_KEY, flows);
  }
}
