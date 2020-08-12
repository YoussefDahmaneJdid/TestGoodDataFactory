import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TagCloudModule } from 'angular-tag-cloud-module';
import { CommonModule  } from '@angular/common'
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    CommonModule,
    ButtonsModule.forRoot(),
    TagCloudModule,
    FlexLayoutModule,
    NgxDaterangepickerMd.forRoot(),
    MatNativeDateModule ,
    MatDatepickerModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule
  // <--- Determines the data type of the model
  
  ],
  declarations: [ DashboardComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { 
      id_sentiment!:number;
      polarity:string;
      score_sentiment:number;


}
