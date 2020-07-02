import { Injectable } from '@angular/core';
import { StoreModel } from '../store-model/store-model';
import { ProductModel } from '../product-model/product-model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {

    this.httpClient = httpClient;

    console.log("Store Service called");

  }

  public GetAllProducts(): Observable<ProductModel[]> {

    return this.httpClient.get<ProductModel[]>("https://localhost:44381/api/getAllProducts");

  }

  public AddProduct(product: ProductModel): Observable<ProductModel[]> {

    return this.httpClient.post<ProductModel[]>("https://localhost:44381/api/addProduct/", product);

  }

  public ModifyProduct(product: ProductModel): Observable<ProductModel[]> {
    
    return this.httpClient.patch<ProductModel[]>("https://localhost:44381/api/modifyProduct/", product);

  }

  public DeleteProduct(product: ProductModel): Observable<any> {
    
    return this.httpClient.delete("https://localhost:44381/api/deleteProduct/"+product.id);

  }

}
