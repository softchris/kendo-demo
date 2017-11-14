import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { AutoCompleteModule } from '@progress/kendo-angular-dropdowns';
import { GridModule } from '@progress/kendo-angular-grid';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { PopupModule } from '@progress/kendo-angular-popup';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { UploadModule } from '@progress/kendo-angular-upload';
import { HttpClientModule } from '@angular/common/http';
import { RippleModule } from '@progress/kendo-angular-ripple';


import { AppComponent } from './app.component';

import 'hammerjs';
import { ChartExampleComponent } from "./chart.example.component";
import { ButtonsExampleComponent } from "./buttons.example.component";
import { DropdownExampleComponent } from "./dropdown.example.component";
import { GridExampleComponent } from "./grid.example.component";
import { LayoutExampleComponent } from "./layout.example.component";
import { PopupExampleComponent } from "./popup.example.component";
import { DialogExampleComponent } from "./dialog.example.component";
import { DateInputsExampleComponent } from "./date.inputs.example.component";
import { InputExampleComponent } from "./input.example.component";
import { FormsModule } from "@angular/forms";
import { SortableExampleComponent } from "./sortable.example.component";
import { EventLogComponent } from "./event.log.component";
import { UploadExampleComponent } from "./upload.example.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ChartExampleComponent,
    ButtonsExampleComponent,
    DropdownExampleComponent,
    GridExampleComponent,
    LayoutExampleComponent,
    PopupExampleComponent,
    DialogExampleComponent,
    DateInputsExampleComponent,
    InputExampleComponent,
    SortableExampleComponent,
    EventLogComponent,
    UploadExampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChartsModule,
    ButtonsModule,
    AutoCompleteModule,
    GridModule,
    LayoutModule,
    PopupModule,
    DialogModule,
    DateInputsModule,
    InputsModule,
    FormsModule,
    SortableModule,
    UploadModule,
    HttpClientModule,
    RippleModule
  ]
})
export class AppModule {
}
