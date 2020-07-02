import { Component, OnInit, Injectable } from '@angular/core';
import { StoreService } from '../store-service/store.service';
import { ProductModel } from '../product-model/product-model';
import { FormGroup, FormControl } from '@angular/forms';

import { plainToClass } from 'class-transformer';


@Injectable()

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit
{

  private storeService: StoreService;

  public productForm: FormGroup;

  constructor(storeService: StoreService) {

    this.storeService = storeService;

  }

  ngOnInit(): void {

    this.productForm = new FormGroup({
      name: new FormControl(),
      price: new FormControl(),
      quantityAvailable: new FormControl()
    });

  }

  SubmitProductForm() {

    let product: ProductModel;

    product = plainToClass(ProductModel, this.productForm.value);

    this.storeService.AddProduct(product).subscribe(
      (res) => {
        console.log("AddProductComponenet-AddProduct()");

        console.log(res);
      }
    );
  }

}
