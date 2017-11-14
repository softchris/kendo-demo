import { Component, TemplateRef } from '@angular/core';

import {
  PopupService,
  PopupRef
} from '@progress/kendo-angular-popup';

@Component({
  selector: 'popup-example',

  template: `
    <ng-template #template>
        <p style="margin: 30px;">Popup content through service!</p>
    </ng-template>
    <div class="example-wrapper">
      <button (click)="togglePopup(template)" class="k-button">Toggle with service</button>
    </div>
      <button  (click)="onToggle()" class="k-button">{{toggleText}} Popup</button>
      <div #anchor class="test"></div>
      <kendo-popup [animate]="false" [anchor]="anchor" [popupClass]="'content popup'" *ngIf="show">
        Popup content.
      </kendo-popup>
           <kendo-popup [popupClass]="'content'" [offset]="offset">
        Popup content.
      </kendo-popup>
  `,
  styles: [`
    .content {
      padding: 30px;
      color: #787878;
      background-color: #fcf7f8;
      border: 1px solid rgba(0,0,0,.05);
    }

    .test {
      margin-top: 50px;
      min-height: 200px;
      border: solid 2px gray;
    }
  `]
})
export class PopupExampleComponent {
  private toggleText: string = "Show";
  private show: boolean = false;
  public offset = { left: 100, top: 100 };
  private popupRef: PopupRef;

  constructor(private popupService: PopupService) { }

  public onToggle(): void {
    this.show = !this.show;
    this.toggleText = this.show ? "Hide" : "Show";
  }

  public togglePopup(template: TemplateRef<any>) {
    if (this.popupRef) {
      this.popupRef.close();
      this.popupRef = null;
    } else {
      this.popupRef = this.popupService.open({
        content: template,
        offset: { top: 100, left: 100 }
      });
    }
  }
}
