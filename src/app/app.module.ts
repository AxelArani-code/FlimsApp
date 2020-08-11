import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TemplateComponent } from './template/template.component';
import { MenuComponent } from './menu/menu.component';
import { ChildishComponent } from './childish/childish.component';
import { FearComponent } from './fear/fear.component';
import { RomanceComponent } from './romance/romance.component';
import { SuspenseComponent } from './suspense/suspense.component';
import { EstrenosComponent } from './estrenos/estrenos.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TemplateComponent,
    MenuComponent,
    ChildishComponent,
    FearComponent,
    RomanceComponent,
    SuspenseComponent,
    EstrenosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
