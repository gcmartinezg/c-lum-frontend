import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoBalastoUpdateSaveDialogComponent } from './tipo-balasto-update-save-dialog.component';
import { TipoBalastoUpdateSaveDialogRoutingModule } from './tipo-balasto-update-save-dialog-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TipoBalastoUpdateSaveDialogComponent],
  imports: [
    CommonModule,
    TipoBalastoUpdateSaveDialogRoutingModule
  ]
})
export class TipoBalastoUpdateSaveDialogModule { }
