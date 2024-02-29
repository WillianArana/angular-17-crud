import { Routes } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "products",
    loadComponent: () => import("./views/product-crud/product-crud.component"),
  },
  {
    path: "products/create",
    loadComponent: () =>
      import(
        "./components/product/product-create/product-create.component"
      ).then((m) => m.ProductCreateComponent),
  },
  {
    path: "products/update/:id",
    loadComponent: () =>
      import(
        "./components/product/product-update/product-update.component"
      ).then((m) => m.ProductUpdateComponent),
  },
  {
    path: "products/delete/:id",
    loadComponent: () =>
      import(
        "./components/product/product-delete/product-delete.component"
      ).then((m) => m.ProductDeleteComponent),
  },
];
