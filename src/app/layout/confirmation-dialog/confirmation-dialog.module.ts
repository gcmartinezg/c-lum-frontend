import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmationDialogRoutingModule } from './confirmation-dialog-routing.module';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [ConfirmationDialogComponent],
  imports: [
    CommonModule,
    ConfirmationDialogRoutingModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class ConfirmationDialogModule { }
