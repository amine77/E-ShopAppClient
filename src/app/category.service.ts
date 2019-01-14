import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = 'http://localhost:8181/api/public/categories';

  constructor(private http: HttpClient) { }

  getCategory(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCategory(category: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, category);
  }

  updateCategory(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCategoriesList(): Observable<any> {
    console.log(this.http.get(`${this.baseUrl}`));
    const x =  this.http.get(`${this.baseUrl}`);
    console.log("x = "+JSON.stringify(x));
    return this.http.get(`${this.baseUrl}`);
  }

  getCategoriesByAge(age: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/age/${age}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
}
