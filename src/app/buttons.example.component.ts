import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'buttons-example',
  template: `
  <div>
    <button kendoButton [icon]="'refresh'">Default button</button>

    // Image icon
    <button kendoButton [imageUrl]="'https://demos.telerik.com/kendo-ui/content/shared/icons/sports/snowboarding.png'">Snowboarding</button>

    <div kendoRippleContainer>
      // FontAwsome icon
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
      <button kendoButton [iconClass]="'fa fa-key fa-fw'">Button</button>
    </div>
  </div>
  `
})

export class ButtonsExampleComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
