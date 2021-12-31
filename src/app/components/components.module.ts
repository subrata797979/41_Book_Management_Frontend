import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableComponent } from './table/table.component';
import { AppMaterialModule } from '../app-material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

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
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: components,
})
export class ComponentsModule { }
