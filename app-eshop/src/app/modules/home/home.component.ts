import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  categories: string[] = [];
  categorizedImages: Record<string, string[]> = {};
  categorizedImagesKeys: string[] = [];

  constructor(
    private fb: FormBuilder,
    public ProductsService: ProductsService,
    public router: Router
  ) {}

  ngOnInit(): void {
    debugger
    this.ProductsService.listProducts().subscribe((res) => {
      this.categorizedImages = res.reduce((acc: any, product: any) => {
        if (!acc[product.category]) {
          acc[product.category] = [];
        }
        acc[product.category].push(product.image);
        return acc;
      }, {} as Record<string, string[]>);
      this.categorizedImagesKeys = Object.keys(this.categorizedImages);
    });
  }


  irCategoria(categoria: any){
    debugger

    this.router.navigateByUrl('/detalles/' + categoria);
    console.log(categoria)
  }
}
