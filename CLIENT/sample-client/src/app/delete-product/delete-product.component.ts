import { Component, OnInit, Injectable } from '@angular/core';
import { StoreService } from '../store-service/store.service';
import { ProductModel } from '../product-model/product-model';
import { FormGroup, FormControl } from '@angular/forms';
import { plainToClass } from 'class-transformer';



@Injectable()

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

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
    
      this.selectedIndex = 0;
    
    }

  }

  SubmitProductForm() {

    let product: ProductModel;

    product = plainToClass(ProductModel, this.productForm.value);

    this.selectedIndex = this.findIndexByProductName(this.productForm.controls["name"].value);

    product.name = this.products[this.selectedIndex].name;
    product.id = this.products[this.selectedIndex].id;

    this.storeService.DeleteProduct(product).subscribe(
      (res) => {
        console.log("ModifyComponenet-ModifyProduct()");

        console.log(res);
      }
    );
    
  }

}
