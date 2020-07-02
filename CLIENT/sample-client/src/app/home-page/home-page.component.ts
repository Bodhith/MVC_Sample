import { Component, OnInit, Injectable } from '@angular/core';
import { StoreService } from '../store-service/store.service';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  button: string;

  constructor() {
    this.button = "unassigned";
  }

  ngOnInit(): void {

  }

  selectedMenu(selectedMenu: string) {

    if (selectedMenu == "AddProductsButton") {

      this.button = "AddProductsButton";

    }

    else if (selectedMenu == "ModifyProductsButton") {

      this.button = "ModifyProductsButton";

    }

    else if (selectedMenu == "GenerateBillButton") {

      this.button = "GenerateBillButton";

    }

    else if (selectedMenu == "DeleteProductButton") {

      this.button = "DeleteProductButton";

    }

  }
}
