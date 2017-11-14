import { Component } from "@angular/core";

declare var alert;

@Component({
  selector: 'chart-component',
  template: `
        <kendo-chart [resizeRateLimit]="2" (seriesClick)="onSeriesClick($event)">
          <kendo-chart-series>
            <kendo-chart-series-item [data]="seriesData">
            </kendo-chart-series-item>
          </kendo-chart-series>
        </kendo-chart>
    `
})
export class ChartExampleComponent {
  seriesData: number[] = [1, 2, 3, 5];

  onSeriesClick(e) {
    alert(`you clicked on ${e.value}`);
  }
}
