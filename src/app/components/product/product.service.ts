import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { Product } from "./product.model";

@Injectable({
  providedIn: "root",
})
export class ProductService {

  baseUrl = "http://localhost:3001/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    /* o segundo parametro (depois de msg) é a Action, no caso um "fechar" ou "X" para fechar (exemplo) */
    this.snackBar.open(msg, "fechar", {
      duration: 3000 /* 3 segundos */,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  /* interagir com o backend - CRUD */
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }
  
  read(): Observable<Product[]> { /*passado um array de produtos*/
    return this.http.get<Product[]>(this.baseUrl)
  }
  
  readById(id: string | null): Observable<Product> { 
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }
  
  update(product: Product): Observable<Product> { 
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }
}
