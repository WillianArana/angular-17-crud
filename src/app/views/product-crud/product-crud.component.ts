import { Component, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { Router } from "@angular/router";
import { ProductReadComponent } from "../../components/product/product-read/product-read.component";
import { HeaderService } from "../../components/template/header/header.service";

@Component({
  selector: "app-product-crud",
  standalone: true,
  imports: [MatCardModule, MatButtonModule, ProductReadComponent],
  templateUrl: "./product-crud.component.html",
  styleUrl: "./product-crud.component.scss",
})
export default class ProductCrudComponent {
  #router = inject(Router);
  #headerService = inject(HeaderService);

  constructor() {
    this.#headerService.headerData = {
      title: "Cadastro de Produtos",
      icon: "storefront",
      routeUrl: "/products",
    };
  }

  navigateToProductCreated(): void {
    this.#router.navigate(["/products/create"]);
  }
}
