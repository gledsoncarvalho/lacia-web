import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    MatNativeDateModule,
    MatExpansionModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
