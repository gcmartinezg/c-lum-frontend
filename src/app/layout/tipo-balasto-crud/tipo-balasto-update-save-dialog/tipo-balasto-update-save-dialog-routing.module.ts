import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TipoBalastoUpdateSaveDialogComponent } from './tipo-balasto-update-save-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: TipoBalastoUpdateSaveDialogComponent
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
export class TipoBalastoUpdateSaveDialogRoutingModule { }
