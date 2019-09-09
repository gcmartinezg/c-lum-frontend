import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TerceroUpdateSaveDialogComponent } from './tercero-update-save-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: TerceroUpdateSaveDialogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerceroUpdateSaveDialogRoutingModule { }
