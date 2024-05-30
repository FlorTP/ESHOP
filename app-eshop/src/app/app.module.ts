import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ModulesModule } from './modules/modules.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './core/services/products.service';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ModulesModule,
    HttpClientModule

  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
