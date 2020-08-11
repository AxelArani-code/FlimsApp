import { SuspenseComponent } from './suspense/suspense.component';
import { RomanceComponent } from './romance/romance.component';
import { FearComponent } from './fear/fear.component';
import { ChildishComponent } from './childish/childish.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { TemplateComponent } from './template/template.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EstrenosComponent } from './estrenos/estrenos.component';

/*Reglas de ruteo*/
const routes: Routes = [
  
  {path:'', component:FooterComponent},
  {path: 'template', component: TemplateComponent},
  {path:'childish', component:ChildishComponent},
  {path:'fear', component: FearComponent},
  {path:'romance', component: RomanceComponent},
  {path:'suspense', component:SuspenseComponent},
  {path: 'estrenos', component: EstrenosComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
