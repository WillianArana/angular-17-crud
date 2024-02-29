import { Injectable, Signal, signal } from "@angular/core";

import { HeaderData } from "./header-data.model";

@Injectable({
  providedIn: "root",
})
export class HeaderService {
  #headerData = signal<HeaderData>({
    title: "Início",
    icon: "home",
    routeUrl: "",
  });

  get headerData(): Signal<HeaderData> {
    console.log("teste header data");
    return this.#headerData.asReadonly();
  }

  set headerData(data: HeaderData) {
    this.#headerData.set(data);
  }

  constructor() {}
}
