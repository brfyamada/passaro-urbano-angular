import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiversaoComponent } from './diversao/diversao.component';
import { HomeComponent } from './home/home.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OfertaComponent } from './oferta/oferta.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { RestauranteComponent } from './restaurante/restaurante.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path: 'restaurante', component: RestauranteComponent},
  {path: 'diversao', component: DiversaoComponent},
  {path: 'oferta', component: OfertaComponent},
  {path: 'oferta/:id', component: OfertaComponent,
   children: [
    {path: '', component: ComoUsarComponent},
    {path: 'como-usar', component: ComoUsarComponent},
    {path: 'onde-fica', component: OndeFicaComponent}
   ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
