import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ChooseProductComponent } from '../choose-product/choose-product.component';


@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.css']
})
export class CategoryModalComponent {
  constructor(
    public dialogRef: MatDialogRef<CategoryModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) {}

  cancel(): void {
    this.dialogRef.close();
  }

  openProductModal(id: number): void{
    const dialogRefIChoose = this.dialog.open(ChooseProductComponent, {
      width: '500px',
      data: {categoryId: id},
    });
  
    dialogRefIChoose.afterClosed().subscribe(result => {
      console.log('The modal was closed with: ', result);
    });

    this.dialogRef.close();
  }
}
