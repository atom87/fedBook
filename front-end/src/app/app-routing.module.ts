import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: "newsfeed", component: NewsfeedComponent},
  { path: "profile", component: ProfileComponent},
  { path: '', redirectTo: '/newsfeed', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
