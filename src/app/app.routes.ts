import { Routes } from '@angular/router';
// paginas de la aplicacion
import { HomeComponent } from './pages/home/home.component';
import { MissingComponent } from './pages/missing/missing.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';

// rutas de la aplicacion
export const routes: Routes = [
  { path: '', component: HomeComponent }, // ruta por defecto
  { path: 'unauthorized', component: UnauthorizedComponent }, // ruta no autorizada
  { path: '**', component: MissingComponent }, // ruta no encontrada
];
