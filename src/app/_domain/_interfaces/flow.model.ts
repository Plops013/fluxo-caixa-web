import { FlowType } from "../_enums/flow-type.enum";

export class Flow {
  id: string;
  name: string;
  value: number;
  type: FlowType;
  date: Date;

  constructor(name: string, value: number, type: FlowType) {
    this.id = new Date().getTime().toString() + '-ts-' + Math.random().toString();
    this.name = name;
    this.value = value;
    this.type = type;
    this.date = new Date();
  }
}
