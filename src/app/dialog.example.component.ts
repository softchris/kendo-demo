import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dialog-example',
  template: `
  <kendo-dialog title="Awesome title goes here" hidden >
  </kendo-dialog>

  <kendo-dialog hidden >
  <div style="text-align: center; margin: 30px;">
    <h4>Enter your e-mail below to unlock.</h4>
    <p>
      <input class="k-textbox" placeholder="Your e-mail here" style="width: 300px;" />
    </p>
    <p>
      <button kendoButton primary="true" style="width: 300px;">GET MY $10 OFF</button>
    </p>
    <a href="#">No thanks!</a>
  </div>
</kendo-dialog>
<kendo-dialog>
  <kendo-dialog-titlebar>
    <div style="font-size: 18px; line-height: 1.3em;">
      <span class="k-icon k-i-warning"></span> Delete Data
    </div>
  </kendo-dialog-titlebar>
  <p style="margin: 30px; text-align: center;">This action cannot be undone.</p>

  <kendo-dialog-actions>
    <button kendoButton (click)="onDialogClose()">Cancel</button>
    <button kendoButton (click)="onDeleteData()" primary="true">Delete</button>
  </kendo-dialog-actions>
</kendo-dialog>`
})

export class DialogExampleComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  onDialogClose() {
    alert("No data deleted.");
  }

  onDeleteData() {
    alert("Data deleted.");
  }
}
