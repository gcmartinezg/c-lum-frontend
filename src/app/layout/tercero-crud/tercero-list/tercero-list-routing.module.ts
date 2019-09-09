import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TerceroListComponent } from './tercero-list.component';

const routes: Routes = [
  {
    path:'',
    component: TerceroListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerceroListRoutingModule { }
