import { BooksComponent } from './pages/books/books.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainComponent } from './pages/main/main.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { AddBookComponent } from './pages/add-book/add-book.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "dashboard-home",
        component: DashboardComponent,
      },
      {
        path: "dashboard-books",
        component: BooksComponent,
      },
      {
        path: "dashboard-card-chart/:id",
        component: LineChartComponent,
      },
      {
        path: "dashboard-add-book",
        component: AddBookComponent,
      } 
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
