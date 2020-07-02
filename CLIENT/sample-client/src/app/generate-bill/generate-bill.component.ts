import { Component, OnInit, Injectable } from '@angular/core';
import { StoreService } from '../store-service/store.service';
import { ProductModel } from '../product-model/product-model';
import { Observable } from 'rxjs';


@Injectable()

@Component({
  selector: 'app-generate-bill',
  templateUrl: './generate-bill.component.html',
  styleUrls: ['./generate-bill.component.css']
})
export class GenerateBillComponent implements OnInit {

  private storeService: StoreService;

  public products$: Observable<ProductModel[]>;

  constructor(storeService: StoreService) {

    this.storeService = storeService;

   }

  ngOnInit(): void {

    this.GetAllProducts();

  }

  public GetAllProducts(): void{

    this.products$ = this.storeService.GetAllProducts();

  }

}
