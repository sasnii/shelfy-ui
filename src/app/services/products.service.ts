import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const baseUrl = 'http://localhost:8080/api';

export interface Item {
  id: number;
  productId: number;
  productName: string;
  date: string;
  foodStatus: string;
  description: string;
  count: number;
}

export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  categoryId: number;
  name: string;
  defaultExpirationDays: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public items$: Observable<Item[]> = of([]);

  public items: Item[] = [];

  public categories: Observable<Category[]> = of([]);
  
  constructor(private http: HttpClient) {}

  getItems(): Item[]{
    return this.items;
  }

  getGlobalItems(): void {
    this.http.get<Item[]>(`${baseUrl}/getItems`).subscribe(items =>
      this.items = items
    );
  }
  
  getItems$(): Observable<Item[]> {
    return this.http.get<Item[]>(`${baseUrl}/getItems`);
  }
  
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${baseUrl}/getCategories`);
  }
  
  getProductsByCategory(id: number): Observable<any> {
    return this.http.get(`${baseUrl}/getProducts/${id}`);
  }

  addCategory(body: any): Observable<any> {
    return this.http.post(`${baseUrl}/addCategory`, body);
  }

  addProduct(body: any): Observable<any> {
    return this.http.post(`${baseUrl}/addProduct`, body);
  }

  addItem(body: any): Observable<any> {
    return this.http.post(`${baseUrl}/addItem`, body);
  }

  removeWasted(id: number, body: any): Observable<any> {
    return this.http.post(`${baseUrl}/removeItem?wasEaten=true`, {
      id: id,
      productId: 9,
      date: '2022-11-20',
      description: '',
      count: 1
    });
  }

  removeEaten(id: number, body: any): Observable<any> {
    return this.http.post(`${baseUrl}/removeItem?wasEaten=false`, {
      id: id,
      productId: 9,
      date: '2022-11-20',
      description: '',
      count: 1
    });
  }

  // deleteItem(id: number): Observable<any> {
  //   return this.http.delete(`${baseUrl}/removeItem`, {
  //     productId: id,
  //     date: new Date(),
  //     description: '',
  //     count: 0,
  //     wasEaten: false
  //   });
  // }

  getRecipies(ingredients: string[]): Observable<any> {
    return this.http.get(`${baseUrl}/getRecipesByIngredients/${ingredients.join(',')}`);
  }

  getStatistics(): Observable<any>{
    return this.http.get(`${baseUrl}/statistics`);
  }
}
