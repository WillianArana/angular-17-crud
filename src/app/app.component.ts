import { Component } from "@angular/core";

import { FooterComponent } from "./components/template/footer/footer.component";
import { HeaderComponent } from "./components/template/header/header.component";
import { NavComponent } from "./components/template/nav/nav.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HeaderComponent, NavComponent, FooterComponent],
  template: `
    <app-header />
    <app-nav />
    <app-footer />
  `,
  styles: [],
})
export class AppComponent {
  title = "frontend";
}
