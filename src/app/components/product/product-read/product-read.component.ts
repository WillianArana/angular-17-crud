import { CurrencyPipe } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";
import { Product } from "../product.model";
import { ProductService } from "../product.service";

import { MatTableModule } from "@angular/material/table";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-product-read",
  standalone: true,
  imports: [CurrencyPipe, RouterModule, MatTableModule],
  templateUrl: "./product-read.component.html",
  styleUrl: "./product-read.component.scss",
})
export class ProductReadComponent implements OnInit {
  #productService = inject(ProductService);

  products: Product[] = [];
  displayedColumns = ["id", "name", "price", "action"];

  ngOnInit(): void {
    this.#productService
      .read()
      .subscribe((products) => (this.products = products));
  }
}
