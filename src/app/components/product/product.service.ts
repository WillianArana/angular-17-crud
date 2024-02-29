import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { EMPTY, Observable, catchError, take } from "rxjs";
import { Product } from "./product.model";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  #snackBar = inject(MatSnackBar);
  #http = inject(HttpClient);

  #baseUrl = "http://localhost:3001/products";

  constructor() {}

  showMessageSucces(msg: string): void {
    this.showMessage(msg, {
      panelClass: "msg-success",
    });
  }

  showMessageError(msg: string): void {
    this.showMessage(msg, {
      panelClass: "msg-error",
    });
  }

  private showMessage(msg: string, config: MatSnackBarConfig<unknown>): void {
    this.#snackBar.open(msg, "X", {
      ...config,
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  create(product: Product): Observable<Product> {
    return this.#http.post<Product>(this.#baseUrl, product).pipe(
      take(1),
      catchError(() => this.errorHandle<Product>())
    );
  }

  private errorHandle<T>(): Observable<T> {
    this.showMessageError("Ocoreu um erro!");
    return EMPTY;
  }

  read(): Observable<Product[]> {
    return this.#http.get<Product[]>(this.#baseUrl).pipe(
      take(1),
      catchError(() => this.errorHandle<Product[]>())
    );
  }

  readById(id: string): Observable<Product> {
    const productPath = `${this.#baseUrl}/${id}`;
    return this.#http.get<Product>(productPath).pipe(
      take(1),
      catchError(() => this.errorHandle<Product>())
    );
  }

  update(product: Product): Observable<Product> {
    const productPath = `${this.#baseUrl}/${product.id}`;
    return this.#http.put<Product>(productPath, product).pipe(
      take(1),
      catchError(() => this.errorHandle<Product>())
    );
  }

  delete(id: string | number): Observable<void> {
    const productPath = `${this.#baseUrl}/${id}`;
    return this.#http.delete<void>(productPath).pipe(
      take(1),
      catchError(() => this.errorHandle<void>())
    );
  }
}
