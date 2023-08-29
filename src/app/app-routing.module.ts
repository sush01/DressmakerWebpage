import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  { path: `home`,
    loadChildren:()=> 
    import(`./home/home.module`).then(m=> m.HomeModule)},
  { path:``, component: LandingPageComponent },
  { path:`**`, component:NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
