import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { ServicesComponent } from './services/services.component';
import { NotificationComponent } from './notification/notification.component';
import { PanierComponent } from './panier/panier.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TailleComponent } from './taille/taille.component';
import { Panier1Component } from './panier1/panier1.component';


const routes: Routes = [
  { path: '',
   component: CarouselComponent
   },
  { path: 'header',
   component: HeaderComponent
   },
   { path: 'categories',
   component: CategoriesComponent
   },
    { path: 'carousel',
   component: CarouselComponent
   },

   { path: 'services',
   component: ServicesComponent
   },
   { path: 'notification',
   component: NotificationComponent
   },
   { path: 'panier',
   component: PanierComponent
   },
   { path: 'footer',
   component: FooterComponent
   },
   { path: 'contact',
   component: ContactComponent
   },
   { path: 'connexion',
   component: ConnexionComponent
   },
   { path: 'inscription',
   component: InscriptionComponent
   },
   { path: 'panier1',
   component: Panier1Component
   },
   { path: 'panier2',
   component: PanierComponent
   },
   { path: 'taille',
   component: TailleComponent
   }
   

  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
