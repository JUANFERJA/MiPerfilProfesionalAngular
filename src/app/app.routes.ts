import { Routes } from '@angular/router';
import { SobreMiPage } from './pages/sobre-mi-page/sobre-mi-page';
import { ExperienciaPage } from './pages/experiencia-page/experiencia-page';
import { ProyectosPage } from './pages/proyectos-page/proyectos-page';
import { HabilidadesPage } from './pages/habilidades-page/habilidades-page';

export const routes: Routes = [
  { path: 'sobre-mi', component: SobreMiPage },
  { path: 'experiencia', component: ExperienciaPage },
  { path: 'proyectos', component: ProyectosPage },
  { path: 'habilidades', component: HabilidadesPage },
  { path: '', redirectTo: '/sobre-mi', pathMatch: 'full' }
];
