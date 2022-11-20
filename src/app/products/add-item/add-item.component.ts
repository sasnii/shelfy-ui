import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { ProductsService } from 'src/app/services/products.service';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent {
  constructor(
    public dialogRef: MatDialogRef<AddItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productService: ProductsService,
  ) {}

  name: string | null = null;
  date: Date = new Date();
  quantity: number = 1;

  cancel(): void {
    this.dialogRef.close();
  }

  submit(): void{
    this.productService.addItem({
      productId: this.data.productId,
      description: this.name,
      date: new Date(this.date),
      count: this.quantity
    }).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
