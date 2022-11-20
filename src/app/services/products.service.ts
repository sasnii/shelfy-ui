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
    // return of([
    //   {
    //     id: 1,
    //     productId: 1,
    //     expirationDate: '1668868600',
    //     description: 'description_1',
    //     quantity: 1,
    //   },
    //   {
    //     id: 2,
    //     productId: 2,
    //     expirationDate: '1668868600',
    //     description: 'description_2',
    //     quantity: 2,
    //   },
    // ]);
  }
  
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${baseUrl}/getCategories`);
    return of([
      {
        id: 1,
        name: 'milk products',
      },
      {
        id: 2,
        name: 'meat and fish',
      },
      {
        id: 3,
        name: 'fruits',
      },
      {
        id: 4,
        name: 'vegetables',
      },
      {
        id: 5,
        name: 'grain products',
      },
      {
        id: 6,
        name: 'other',
      },
    ]);
  }
  
  getProductsByCategory(id: number): Observable<any> {
    return this.http.get(`${baseUrl}/getProducts/${id}`);
    return of([
      {
      "id": 4,
      "name": "chicken",
      "validDays": 7
      },
      {
      "id": 5,
      "name": "turkey",
      "validDays": 7
      },
      {
      "id": 6,
      "name": "beef",
      "validDays": 7
      },
      {
      "id": 7,
      "name": "salmon",
      "validDays": 7
      },
      {
      "id": 8,
      "name": "cod",
      "validDays": 7
      }
      ]);
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

  editItem(id: number, body: any): Observable<any> {
    return this.http.put(`${baseUrl}/addItem/${id}`, body);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/removeItem/${id}`);
  }

  getRecipies(ingredients: string[]): Observable<any> {
    return this.http.get(`${baseUrl}/getRecipesByIngredients/${ingredients.join(',')}`);
  }
}
