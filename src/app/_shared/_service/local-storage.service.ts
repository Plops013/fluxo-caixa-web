import { Injectable } from '@angular/core';
import { FluxoCaixaService } from './fluxo-caixa.service';
import { Flow } from 'src/app/_domain/_interfaces/flow.model';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  constructor() {
    this.initialSetup();
  }

  initialSetup() {
    if (!localStorage.getItem('FLUXO_CAIXA_LISTA')) {
      localStorage.setItem(
        'FLUXO_CAIXA_LISTA',
        JSON.stringify([
          {
            id: '1690749876926-ts-0.09363086218610372',
            name: 'Venda Cliente #01',
            value: 198.5,
            type: 'CREDITO',
            date: '2023-07-30T20:44:36.926Z',
          },
          {
            id: '1690749891262-ts-0.7402738533055424',
            name: 'Venda Cliente #02',
            value: 450,
            type: 'CREDITO',
            date: '2023-07-30T20:44:51.262Z',
          },
          {
            id: '1690749925324-ts-0.43715545794766775',
            name: 'Pagamento #01',
            value: 79.9,
            type: 'DEBITO',
            date: '2023-07-28T20:45:25.324Z',
          },
          {
            id: '1690749982825-ts-0.5887134213851364',
            name: 'Pagamento #02',
            value: 189.9,
            type: 'DEBITO',
            date: '2023-07-30T20:46:22.825Z',
          },
          {
            id: '1690749994424-ts-0.9872162934918396',
            name: 'Pagamento #03',
            value: 50,
            type: 'DEBITO',
            date: '2023-03-30T20:46:34.424Z',
          },
          {
            id: '1690750061418-ts-0.3238883750933663',
            name: 'Venda Cliente #03',
            value: 128.5,
            type: 'CREDITO',
            date: '2023-05-30T20:47:41.418Z',
          },
        ])
      );
    }
  }

  get(key: string): Flow[] {
    return JSON.parse(localStorage.getItem(key) ?? '[]');
  }

  set(key: string, value: Flow[]): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
