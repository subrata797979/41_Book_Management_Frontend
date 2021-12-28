import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { HighchartsChartModule } from "highcharts-angular";

const components = [PieChartComponent, LineChartComponent];


@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    HighchartsChartModule
  ],
  exports: components,
})
export class ChartsModule { }
