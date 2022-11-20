import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { Category, ProductsService } from 'src/app/services/products.service';
import { AddItemComponent } from '../add-item/add-item.component';

@Component({
  selector: 'app-choose-product',
  templateUrl: './choose-product.component.html',
  styleUrls: ['./choose-product.component.css'],
})
export class ChooseProductComponent implements OnInit {
  public categories: Category[] = [];

  constructor(
    public dialogRef: MatDialogRef<ChooseProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productService
      .getProductsByCategory(this.data.categoryId)
      .subscribe((products) => (this.categories = products));
  }

  cancel(): void {
    this.dialogRef.close();
  }

  addItem(id: number, name: string) {
    const dialogRefItem = this.dialog.open(AddItemComponent, {
      width: '500px',
      data: { productId: id, productName: name},
    });

    dialogRefItem.afterClosed().subscribe((result) => {
      console.log('The modal was closed with: ', result);
    });

    this.dialogRef.close();
  }
}
