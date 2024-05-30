import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  categories: string[] = [];
  isLoading: boolean = true;

  constructor(
    private fb: FormBuilder,
    public ProductsService: ProductsService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.ProductsService.listCategory().subscribe((res) => {
      debugger
      this.categories = this.getUniqueCategories(res);
      //
      this.isLoading = false;
    });
  }

  getUniqueCategories(products: any[]): string[] {
    const categories = products.map(product => product.category);
    return [...new Set(categories)];
  }

   irCategoria(categoria: any){
    debugger
    const ruta = '/detalles/' + categoria;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([ruta]);
    });
  }
}
