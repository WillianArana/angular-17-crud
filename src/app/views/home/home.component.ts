import { Component, inject } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { HeaderService } from "../../components/template/header/header.service";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [MatCardModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  #headerService = inject(HeaderService);

  constructor() {
    this.#headerService.headerData = {
      title: "Início",
      icon: "home",
      routeUrl: "",
    };
  }
}
