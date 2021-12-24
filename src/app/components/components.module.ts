import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    CardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    TableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
