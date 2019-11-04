import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepoComponent } from './repo/repo.component';

import { FormComponent } from './form/form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DateFormatPipe } from './date-format.pipe';
import { RepoHoverDirective } from './repo-hover.directive';
import { HttpClientModule } from '@angular/common/http';
import { NgProgressModule } from "@ngx-progressbar/core";
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';


@NgModule({
  declarations: [
    AppComponent,
    RepoComponent,
   
    FormComponent,
    NavBarComponent,
    NotFoundComponent,
    DateFormatPipe,
    RepoHoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
