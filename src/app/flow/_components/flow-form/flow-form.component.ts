import { CurrencyPipe } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Flow } from 'src/app/_domain/_interfaces/flow.model';

@Component({
  selector: 'fc-flow-form',
  templateUrl: './flow-form.component.html',
  styleUrls: ['./flow-form.component.scss'],
  providers: [CurrencyPipe]
})
export class FlowFormComponent {
  @Output('formSubmit') flowFormSubmit = new EventEmitter<Flow>();
  constructor(private fb: FormBuilder) {   }

  flowForm = this.fb.group({
    name: ['', [Validators.required]],
    value: ['', [Validators.required]],
    type: ['CREDITO', Validators.required],
  });

  onSubmit() {
    this.flowForm.markAllAsTouched();
    if (this.flowForm.invalid) return;

    this.flowFormSubmit.emit({ ...this.mapFormToFlow(this.flowForm.value) });
    this.flowForm.reset({ type: 'CREDITO' });
  }

  mapFormToFlow(formValues: any): Flow {
    return new Flow(formValues.name, formValues.value, formValues.type);
  }
}
