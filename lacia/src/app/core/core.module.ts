import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  imports: [
    NgMaterialMultilevelMenuModule,
    // MATERIAL ANGULAR
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule,
    MatMenuModule
  ],
  exports: [MainLayoutComponent],
  declarations: [MainLayoutComponent]
})
export class CoreModule { }
