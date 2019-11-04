import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { RepoComponent } from './repo/repo.component';


const routes: Routes = [
  { path: 'github', component: RepoComponent},

  { pathMatch: 'full', redirectTo: 'github', path: '' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
