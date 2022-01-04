import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AppMaterialModule } from '../app-material.module';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const pages = [DashboardComponent, MainComponent, BooksComponent, AddBookComponent];

@NgModule({
  declarations: pages,
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: pages,
})
export class PagesModule {}