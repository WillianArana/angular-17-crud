import { Component, OnInit, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "../product.model";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-update",
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: "./product-update.component.html",
  styleUrl: "./product-update.component.scss",
})
export class ProductUpdateComponent implements OnInit {
  #productService = inject(ProductService);
  #route = inject(ActivatedRoute);
  #router = inject(Router);

  product: Product = {
    name: "",
    price: 0,
  };

  ngOnInit(): void {
    const id = this.#route.snapshot.paramMap.get("id");
    if (id)
      this.#productService
        .readById(id)
        .subscribe((product) => (this.product = product));
  }

  update(): void {
    this.#productService.update(this.product).subscribe(() => {
      this.#productService.showMessageSucces("Produto atualizado com sucesso!");
      this.navigateToProducts();
    });
  }

  private navigateToProducts(): void {
    this.#router.navigate(["/products"]);
  }

  cancel(): void {
    this.navigateToProducts();
  }
}
