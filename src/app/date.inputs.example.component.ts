import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date-input-example',
  template: `
    <kendo-calendar [disabled]="true"></kendo-calendar>
    <kendo-calendar [focusedDate]="focusedDate" ></kendo-calendar>
    <kendo-calendar [value]="value"></kendo-calendar>
  `
})

export class DateInputsExampleComponent implements OnInit {
  public focusedDate: Date = new Date(2017, 11, 10);
  public value: Date = new Date(2017, 11, 10);

  constructor() { }

  ngOnInit() { }
}
