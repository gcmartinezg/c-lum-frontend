import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TipoBalastoCrudRoutingModule } from "./tipo-balasto-crud-routing.module";
import { TipoBalastoCrudComponent } from "./tipo-balasto-crud.component";
import { TipoBalastoUpdateSaveDialogComponent } from "./tipo-balasto-update-save-dialog/tipo-balasto-update-save-dialog.component";
import {
  MatDialogModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatOptionModule,
  MatSelectModule
} from "@angular/material";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    TipoBalastoCrudComponent,
    TipoBalastoUpdateSaveDialogComponent
  ],
  imports: [
    CommonModule,
    TipoBalastoCrudRoutingModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule
  ],
  entryComponents: [TipoBalastoUpdateSaveDialogComponent]
})
export class TipoBalastoCrudModule {}
