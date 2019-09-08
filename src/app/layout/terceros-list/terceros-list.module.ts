import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TercerosListComponent } from "./terceros-list.component";
import { FormsModule } from "@angular/forms";
import {
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatSortModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSnackBarModule,
  MatDialogModule
} from "@angular/material";
import { TercerosListRoutingModule } from "./terceros-list-routing.module";

@NgModule({
  declarations: [TercerosListComponent],
  imports: [
    CommonModule,
    FormsModule,
    TercerosListRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatDialogModule
  ]
})
export class TercerosListModule {}
