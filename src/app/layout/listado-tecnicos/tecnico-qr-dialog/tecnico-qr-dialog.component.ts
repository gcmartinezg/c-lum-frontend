import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmationObject } from 'src/app/shared/domain/confirmation-object';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tecnico-qr-dialog',
  templateUrl: './tecnico-qr-dialog.component.html',
  styleUrls: ['./tecnico-qr-dialog.component.scss']
})
export class TecnicoQrDialogComponent implements OnInit {

  image : any;

  constructor(
    private dialogRef: MatDialogRef<TecnicoQrDialogComponent>,
    private matDialog : MatDialog,
    private _sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public injectedObject: ConfirmationObject,
  ) { }

  ngOnInit() {
    this.getImage();
  }

  getImage(){
    this.image = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' 
                 + this.injectedObject.body);
  }

  cerrar() {
    this.dialogRef.close();
  }

}