import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TipoBalastoListComponent } from './tipo-balasto-list.component';

const routes: Routes = [
  {
    path:'',
    component: TipoBalastoListComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TipoBalastoListRoutingModule { }
