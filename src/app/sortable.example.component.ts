import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sortable-example',
  template: `
    <div class="example-config">
        <h5>Items: {{items | json}}</h5>
        <h5>Disabled items: {{disabledIndexes}}</h5>
    </div>
    <div class="container-fluid">
        <kendo-sortable
            [data]="items"
            [navigatable]="true"
            [animation]="true"
            [disabledIndexes]="disabledIndexes"
            class="row"
            itemClass="item col-xs-6 col-sm-3"
            activeItemClass="item col-xs-6 col-sm-3 active"
            disabledItemClass="item col-xs-6 col-sm-3 disabled">
        >
        </kendo-sortable>
    </div>
  `,
  styles: [`
    .item {
    background-color: #bfe7f9;
    color: #1494d0;
    border: 1px solid #fff;
    height: 70px;
    line-height: 68px;
    font-size: 16px;
    text-align: center;
    outline: none;
    cursor: move;
}

.item:hover,
.employee:hover {
    opacity: 0.8;
}

.item.active,
.employee.active {
    background-color: #27aceb;
    color: #fff;
    border-color: #27aceb;
    z-index: 10;
}

.item.disabled {
    opacity: 0.5;
    cursor: default;
}

.team {
    min-height: 240px;
    padding-top: 15px;
    padding-bottom: 15px;
    border: 1px solid #fff;
    background-color: #dff3fc;
}

.team-b {
    background-color: #fbe0e7;
}

.employee {
    background-color: #bfe7f9;
    color: #1494d0;
    margin: 1px;
    padding: 5px;
    cursor: move;
}

.team-b .employee {
    background-color: #f3b9c9;
    color: #dd4672;
}

.team-b .employee.active {
    background-color: #dd4672;
    color: #fff;
}

.empty {
    height: 150px;
}
  `],
  encapsulation: ViewEncapsulation.None
})
export class SortableExampleComponent {
  public disabledIndexes: number[] = [0, 2, 5, 7];
  public items: string[] = [];
  constructor() {
    for (let i = 0; i < 8; i++) {
      this.items[i] = "Item " + i;
    }
  }
}
