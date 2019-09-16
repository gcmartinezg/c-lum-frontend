import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinadorEditRoutingModule } from './coordinador-edit-routing.module';
import { CoordinadorEditComponent } from './coordinador-edit.component';
import { MatDialogModule, MatSnackBarModule, MatFormFieldModule, MatInputModule, MatIconModule, MatOptionModule, MatSelectModule, MatCard, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CoordinadorEditComponent],
  imports: [
    CommonModule,
    CoordinadorEditRoutingModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule
  ]
})
export class CoordinadorEditModule { }
