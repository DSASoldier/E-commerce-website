import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { AdminUpdateComponent } from "./admin-update.component";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'dialog',
  templateUrl: './dialog.html',
})

export class DialogOverviewExample {
  
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExample>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ){}

  onNoClick(): void {
    console.log(this.data);
    this.dialogRef.close();
 }
}
