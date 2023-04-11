import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CategoriesComponent } from './categories/categories.component';
import { NotificationComponent } from './notification/notification.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PanierComponent } from './panier/panier.component';
import { HommesComponent } from './hommes/hommes.component';
import { ConnectComponent } from './connect/connect.component';
import { AproposComponent } from './apropos/apropos.component';
import { TailleComponent } from './taille/taille.component';
import { Panier1Component } from './panier1/panier1.component';
import { Panier2Component } from './panier2/panier2.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    HeaderComponent,
    CarouselComponent,
    CategoriesComponent,
    NotificationComponent,
    FooterComponent,
    ServicesComponent,
    ContactComponent,
    InscriptionComponent,
    ConnexionComponent,
    PanierComponent,
    HommesComponent,
    ConnectComponent,
    AproposComponent,
    TailleComponent,
    Panier1Component,
    Panier2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
