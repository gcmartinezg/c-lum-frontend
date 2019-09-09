import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerceroUpdateSaveDialogRoutingModule } from './tercero-update-save-dialog-routing.module';
import { TerceroUpdateSaveDialogComponent } from './tercero-update-save-dialog.component';

@NgModule({
  declarations: [TerceroUpdateSaveDialogComponent],
  imports: [
    CommonModule,
    TerceroUpdateSaveDialogRoutingModule
  ]
})
export class TerceroUpdateSaveDialogModule { }
