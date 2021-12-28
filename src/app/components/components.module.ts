import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableComponent } from './table/table.component';
import { AppMaterialModule } from '../app-material.module';
import { RouterModule } from '@angular/router';
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
import { HighchartsChartModule } from 'highcharts-angular';
HC_exporting(Highcharts);

const components = [
  CardComponent,
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
  TableComponent
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    RouterModule,
    HighchartsChartModule,
    AppMaterialModule,
  ],
  exports: components,
})
export class ComponentsModule { }
