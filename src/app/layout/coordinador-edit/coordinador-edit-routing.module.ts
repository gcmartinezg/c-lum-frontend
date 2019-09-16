import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoordinadorEditComponent } from './coordinador-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CoordinadorEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordinadorEditRoutingModule { }
