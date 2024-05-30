import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  listProductsCategory(): Observable <any> {
    return this.http.get(`assets/api/products.json`);
  }

  listProducts(): Observable<any> {
    return this.http.get<any>(`assets/api/products.json`);
  }
  listCategory(): Observable<any> {
    return this.http.get<any>(`assets/api/category.json`);
  }
}
