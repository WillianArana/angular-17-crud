import { Component, inject } from "@angular/core";

import { NgIf } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";
import { HeaderService } from "./header.service";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [NgIf, RouterModule, MatToolbarModule, MatIconModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  #headerService = inject(HeaderService);
  data = this.#headerService.headerData;
}
