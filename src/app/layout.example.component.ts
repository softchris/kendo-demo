import { PanelBarItemModel } from "@progress/kendo-angular-layout";
import { Component } from '@angular/core';

@Component({
  selector: 'layout-example',
  styles: [`
        .custom-template {
            padding: 30px;
            text-align: center;
        }
    `],
  template: `
        <kendo-panelbar [items]="items" (stateChange)="onPanelChange($event)">
            <ng-template kendoPanelBarItemTemplate let-dataItem>
                <div [class]="'custom-template'">
                    <h4>Custom template: </h4>
                    <p>{{dataItem.content}}</p>
                </div>
            </ng-template>
        </kendo-panelbar>
    `
})

export class LayoutExampleComponent {
  private items: Array<PanelBarItemModel> = [
    <PanelBarItemModel>{ title: "First item", content: "Item content", expanded: true },
    <PanelBarItemModel>{
      title: "Second item", children: [
        <PanelBarItemModel>{ title: "Child item", content: "More content" }
      ]
    }
  ];

  public onPanelChange(event: any) { console.log("stateChange: ", event); }
}
