import { Component } from '@angular/core';

@Component({
  selector: 'dropdown-example',
  template: `
    <kendo-autocomplete [data]="data"
      [filterable]="true"
      (valueChange)="valueChange($event)"
      (filterChange)="filterChange($event)"
      (open)="open()"
      (close)="close()"
      (focus)="focus()"
      (blur)="blur()"
    >
    </kendo-autocomplete>
  `
})

export class DropdownExampleComponent {
  public events: string[] = [];
  public source: Array<string> = ['Luke', 'Leia', 'Vader', 'Palpatine', 'Yoda', 'Dokuu'];
  public data: Array<string>;

  constructor() {
    this.data = this.source.slice();
  }

  public valueChange(value: any): void {
    console.log("valueChange", value);
  }

  public filterChange(filter: any): void {
    console.log("filterChange", filter);
    this.data = this.source.filter((s) => s.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }

  public open(): void {
    console.log('open');
  }

  public close(): void {
    console.log('close');
  }

  public focus(): void {
    console.log('focus');
  }

  public blur(): void {
    console.log('blur');
  }
}
