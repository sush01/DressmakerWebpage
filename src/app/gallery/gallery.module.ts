import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GallerypageComponent } from './gallerypage/gallerypage.component';


@NgModule({
  declarations: [
    GallerypageComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule
  ],
  exports:[GallerypageComponent]

})
export class GalleryModule { }
