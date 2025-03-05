import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes'; // 👈 Importando rutas

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // 👈 Opcional: useHash evita errores en recarga
  exports: [RouterModule]
})
export class AppRoutingModule { }
