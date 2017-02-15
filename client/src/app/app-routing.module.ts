import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {VideosComponent} from "./videos/videos.component";
import {DetailsComponent} from "./details/details.component";
import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [{path: 'videos', component: VideosComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'series', component: VideosComponent},
  {path: 'movies', component: VideosComponent},
  {path: 'videos/movies/top-rated', component: VideosComponent},
  {path: 'videos/series/top-rated', component: VideosComponent},
  {path: 'videos/sort-by-imdb-rating', component: VideosComponent},
  {path: 'movies/sort-by-imdb-rating', component: VideosComponent},
  {path: 'series/sort-by-imdb-rating', component: VideosComponent}

]
@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
