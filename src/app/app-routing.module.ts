import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ArtpageComponent } from './artpage/artpage.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: '', component: HomepageComponent},
  {path: 'artpage', component: ArtpageComponent},
  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
