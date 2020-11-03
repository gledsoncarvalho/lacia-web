import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { NgBrazil } from 'ng-brazil';
import { AlertComponent } from './components/alert/alert.component';
import { MaskDirective } from './directives/mask';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { AngularFileUploaderModule } from "angular-file-uploader";
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [MaskDirective, AlertComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatDividerModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatExpansionModule,
    NgBrazil,
    MatPaginatorModule,
    CurrencyMaskModule,
    AngularFileUploaderModule,
    Ng2SearchPipeModule],
  exports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatSidenavModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatDividerModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MaskDirective,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatMenuModule,
    MatExpansionModule,
    NgBrazil,
    MatPaginatorModule,
    CurrencyMaskModule,
    AngularFileUploaderModule,
    Ng2SearchPipeModule
  ],
  providers: [
    AlertComponent
  ]
})
export class SharedModule { }
