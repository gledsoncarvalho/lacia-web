import { NgModule } from '@angular/core';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjetoCadastradoComponent } from './features/projeto-cadastrado/projeto-cadastrado.component';





@NgModule({
  declarations: [
    AppComponent,
    ProjetoCadastradoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    Ng2SearchPipeModule,
    
    
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},],
  bootstrap: [AppComponent]
})
export class AppModule { }
