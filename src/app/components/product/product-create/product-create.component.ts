import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { Router } from "@angular/router";
import { ProductService } from "../product.service";

import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { Product } from "../product.model";

@Component({
  selector: "app-product-create",
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: "./product-create.component.html",
  styleUrl: "./product-create.component.scss",
})
export class ProductCreateComponent {
  #productService = inject(ProductService);
  #router = inject(Router);

  product = {
    name: "",
    price: undefined,
  };

  create(): void {
    this.#productService
      .create(Object.assign(this.product, {} as Product))
      .subscribe(() => {
        this.#productService.showMessageSucces(
          "Operação executada com sucesso!"
        );
        this.#router.navigate(["/products"]);
      });
  }

  cancel(): void {
    this.#router.navigate(["/products"]);
  }
}
