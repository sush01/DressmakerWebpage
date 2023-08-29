import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GallerypageComponent } from './gallerypage/gallerypage.component';

const routes: Routes = [
 { path:`gallery` , component: GallerypageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
