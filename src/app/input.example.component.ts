import { Component } from "@angular/core";

@Component({
  selector: 'input-example',
  template: `
        <div class="example-config">
            <input id="ac" type="checkbox" [(ngModel)]="includeLiterals">
            <label for="ac">Include literals in the value</label>
        </div>
        <div class="example-wrapper">
            <kendo-maskedtextbox
              [includeLiterals]="includeLiterals"
              [(value)]="value"
              [mask]="mask">
            </kendo-maskedtextbox>
            Component value: {{value}}
        </div>
    `
})

export class InputExampleComponent {
  public includeLiterals: boolean = false;
  public value: string = "5748157000194334";
  public mask: string = "0000-0000";
}
