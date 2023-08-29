import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SewingServicepageComponent } from './sewing-servicepage/sewing-servicepage.component';

const routes: Routes = [
  {path:`sewing-services`, component: SewingServicepageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SewingServicesRoutingModule { }
