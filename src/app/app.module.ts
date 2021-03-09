import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioButtonsComponent } from './radio-buttons/radio-buttons.component';
import { SelectsComponent } from './selects/selects.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { ChipColorsComponent } from './chip-colors/chip-colors.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';

import {MatCheckboxModule, } from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule, } from '@angular/material/datepicker'
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';





@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    RadioButtonsComponent,
    SelectsComponent,
    DatePickerComponent,
    ChipColorsComponent,
    ProgressSpinnerComponent,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatCardModule,

  ],
  exports: [MatInputModule, MatFormFieldModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
