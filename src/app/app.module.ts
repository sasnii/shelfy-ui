import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './products/product-list/product-list.component';
import { AppRoutingModule } from './app-routing.module';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { MatDialogModule } from '@angular/material/dialog';
import { CategoryModalComponent } from './products/category-modal/category-modal.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ProductModalComponent } from './products/product-modal/product-modal.component';
import { AddItemComponent } from './products/add-item/add-item.component';
import { ChooseProductComponent } from './products/choose-product/choose-product.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RecipeComponent } from './recipe/recipe/recipe.component';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { StatisticsComponent } from './statistics/statistics/statistics.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [AppComponent, ProductListComponent, CategoryModalComponent, ProductModalComponent, AddItemComponent, ChooseProductComponent, RecipeComponent, StatisticsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // Angular Material
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    MatTreeModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatIconModule
  ],
  providers: [
    {provide: MatDatepickerModule, useValue: { useUtc: true }}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
