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
  selector: "app-product-delete",
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: "./product-delete.component.html",
  styleUrl: "./product-delete.component.scss",
})
export class ProductDeleteComponent implements OnInit {
  #produtService = inject(ProductService);
  #router = inject(Router);
  #route = inject(ActivatedRoute);

  product!: Required<Product>;

  ngOnInit(): void {
    const id = this.#route.snapshot.paramMap.get("id");
    if (id)
      this.#produtService
        .readById(id)
        .subscribe((product) => (this.product = product as Required<Product>));
  }

  delete(): void {
    this.#produtService.delete(this.product.id).subscribe(() => {
      this.#produtService.showMessageSucces("Produto excluido com sucesso!");
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
