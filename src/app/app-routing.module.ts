import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MaFormationComponent } from './ma-formation/ma-formation.component';
import { MesCentresDInteretsComponent } from './mes-centres-d-interets/mes-centres-d-interets.component';
import { MesCompetencesComponent } from './mes-competences/mes-competences.component';
import { MesExperiencesProComponent } from './mes-experiences-pro/mes-experiences-pro.component';

const routes: Routes = [
  { path: '', component:  HomePageComponent},
  { path: 'Mes-competences', component:  MesCompetencesComponent},
  { path: 'Ma-formation', component:  MaFormationComponent},
  { path: 'Mes-experiences-pro', component:  MesExperiencesProComponent},
  { path: 'Mes-centres-d-interets', component:  MesCentresDInteretsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
