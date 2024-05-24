import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes
//import { BuscarDocumentoComponent } from './components/buscar-documento/buscar-documento.component';
import { InfoDocumentoComponent } from './components/info-documento/info-documento.component';
import { BuscarDocumentoComponent } from './components/buscar-documento/buscar-documento.component';

const routes: Routes = [
  { path: '', component: BuscarDocumentoComponent },
  { path: 'info-documento', component: InfoDocumentoComponent },
  { path: 'editar-documento/:id', component: InfoDocumentoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
