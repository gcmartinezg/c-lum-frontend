import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoMaterialListComponent } from './tipo-material-list.component';

const routes: Routes = [
  {
    path:'',
    component: TipoMaterialListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoMaterialListRoutingModule { }
