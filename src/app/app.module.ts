import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GalleryModule } from './gallery/gallery.module';
import { ContactModule } from './contact/contact.module';
import { SewingServicesModule } from './sewing-services/sewing-services.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
   
    GalleryModule,
    ContactModule,
    SewingServicesModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
