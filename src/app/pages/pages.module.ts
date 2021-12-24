import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppMaterialModule } from '../app-material.module';
import { RouterModule } from '@angular/router';

const pages = [DashboardComponent, MainComponent];

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule
  ],
  exports: pages,
})
export class PagesModule { }
