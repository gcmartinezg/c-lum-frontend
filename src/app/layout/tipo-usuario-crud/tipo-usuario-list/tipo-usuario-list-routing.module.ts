import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoUsuarioListComponent } from './tipo-usuario-list.component';

const routes: Routes = [
  {
    path: '',
    component: TipoUsuarioListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoUsuarioListRoutingModule { }
