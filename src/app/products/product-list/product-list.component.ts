import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { RecipeComponent } from 'src/app/recipe/recipe/recipe.component';
import { Item, ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  items: Item[] = [];
  displayedColumns: string[] = ['name', 'date', 'description', 'quantity', 'status', 'actions'];

  
  constructor(
    private productService: ProductsService,
    public dialog: MatDialog
    ){
    this.getItems();
  }
  
  getItems(): void {
    this.productService.getItems$().subscribe(items => this.items = items);
  }

  ngOnInit(): void {
    
  }

  used(id: number){
    this.productService.removeEaten(id, {}).subscribe(x => this.getItems());
  }

  thrown(id: number){
    this.productService.removeWasted(id, {}).subscribe(x => this.getItems());
  }

  showRecipe(){
    const items = this.items.map(x => x.productName).slice(0,3);
    this.productService.getRecipies(items).subscribe(recipies => {
      const dialogRef = this.dialog.open(RecipeComponent, {
        data: {recipies},
        width: '500px'
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    })
  }

}
