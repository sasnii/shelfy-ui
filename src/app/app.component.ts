import { Component, OnInit } from '@angular/core';
import { Category, ProductsService } from './services/products.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryModalComponent } from './products/category-modal/category-modal.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private categories: Category[] = [];
  
  constructor(
    private productService: ProductsService,
    public dialog: MatDialog
    ) { }

  addProduct(){
    const dialogRef = this.dialog.open(CategoryModalComponent, {
      width: '500px',
      data: {categories: this.categories},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The modal was closed with: ', result);
    });
  }


  ngOnInit(): void {
    this.productService.getCategories().subscribe(categories => {
      this.categories = categories;
    })
  }
}
