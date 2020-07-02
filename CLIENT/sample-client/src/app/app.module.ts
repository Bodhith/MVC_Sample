import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddProductsComponent } from './add-products/add-products.component';

import { StoreService } from './store-service/store.service';
import { ModifyProductsComponent } from './modify-products/modify-products.component';
import { HttpClientModule } from '@angular/common/http';

import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import { GenerateBillComponent } from './generate-bill/generate-bill.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddProductsComponent,
    ModifyProductsComponent,
    GenerateBillComponent,
    DeleteProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
