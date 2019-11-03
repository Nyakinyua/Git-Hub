import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepoComponent } from './repo/repo.component';
import { UserComponent } from './user/user.component';
import { FormComponent } from './form/form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DateFormatPipe } from './date-format.pipe';
import { RepoHoverDirective } from './repo-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    RepoComponent,
    UserComponent,
    FormComponent,
    NavBarComponent,
    NotFoundComponent,
    DateFormatPipe,
    RepoHoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
