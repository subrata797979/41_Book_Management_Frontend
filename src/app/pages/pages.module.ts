import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BooksComponent } from './books/books.component';
import { AppMaterialModule } from '../app-material.module';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';

const pages = [DashboardComponent, MainComponent, BooksComponent];

@NgModule({
  declarations: pages,
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule,
    ComponentsModule
  ],
  exports: pages,
})
export class PagesModule {}