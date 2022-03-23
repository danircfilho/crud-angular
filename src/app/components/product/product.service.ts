import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
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

  /* interagir com o backend */
  create(product: Product) Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }
}
