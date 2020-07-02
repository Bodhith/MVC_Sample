import { Component, OnInit, Injectable } from '@angular/core';

import { StoreService } from '../store-service/store.service';
import { ProductModel } from '../product-model/product-model';
import { FormGroup, FormControl } from '@angular/forms';
import { plainToClass } from 'class-transformer';


@Injectable()

@Component({
  selector: 'app-modify-products',
  templateUrl: './modify-products.component.html',
  styleUrls: ['./modify-products.component.css']
})
export class ModifyProductsComponent implements OnInit {

  private storeService: StoreService;

  public products: ProductModel[];

  public selectedIndex: number;

  public productForm: FormGroup;

  constructor(storeService: StoreService) {

    this.selectedIndex = -1;

    this.storeService = storeService;

  }

  ngOnInit(): void {

    this.selectedIndex = -1;

    this.GetAllProducts();
    
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      quantityAvailable: new FormControl()
    });

  }

  GetAllProducts(){

    this.storeService.GetAllProducts().subscribe(
      (data: ProductModel[]) => {
        console.log("ModifyComponenet-GetAll()");

        this.products = data
      }
    );

  }

  findIndexByProductName(productName: string): number{

    let index: number = 0;

    for(let product of this.products){
      
      if( product.name === productName){
        
        return index;

      }

      index++;
    }

    return -1;

  }

  userSelectedOption(productName: string){

    if( productName !== "Select a Product" ){
    
      this.setDefaultValues(productName);
    
    }

  }

  setDefaultValues(productName: string){

    this.selectedIndex = this.findIndexByProductName(productName);

    this.productForm.controls["id"].setValue(this.products[this.selectedIndex].id);
    this.productForm.controls["price"].setValue(this.products[this.selectedIndex].price);
    this.productForm.controls["quantityAvailable"].setValue(this.products[this.selectedIndex].quantityAvailable);

  }

  SubmitProductForm() {

    let product: ProductModel;

    product = plainToClass(ProductModel, this.productForm.value);

    product.id = this.products[this.selectedIndex].id;
    product.entryDate = this.products[this.selectedIndex].entryDate;

    this.storeService.ModifyProduct(product).subscribe(
      (res) => {
        console.log("ModifyComponenet-ModifyProduct()");

        console.log(res);
      }
    );
    
  }

}
