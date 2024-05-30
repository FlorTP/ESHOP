import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class detailsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  favorites: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public ProductsService: ProductsService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.ProductsService.listProducts().subscribe((res: Product[]) => {
      this.products = res;

      const category = this.route.snapshot.params['id'];
      if (category) {
        this.filteredProducts = this.products.filter(
          (product) => product.category === category
        );
      } else {
        this.filteredProducts = this.products;
      }
    });
  }

  addToCart(product: any) {
    debugger;
    console.log(product);

    const productoAdd = localStorage.getItem('productoAgregado');
    const favoritos = productoAdd ? JSON.parse(productoAdd) : [];
    const existe = favoritos.some((fav: any) => fav.id === product.id);

    if (!existe) {
      favoritos.push(product);
      localStorage.setItem('productoAgregado', JSON.stringify(favoritos));
    } else {
      console.log('El producto ya está en la lista de favoritos.');
    }

  }

  addToFavorite(product: any) {
    debugger;

    const favoritosString = localStorage.getItem('favorite');
    const favoritos = favoritosString ? JSON.parse(favoritosString) : [];
    const existe = favoritos.some((fav: any) => fav.id === product.id);

    if (!existe) {
      favoritos.push(product);
      localStorage.setItem('favorite', JSON.stringify(favoritos));
    } else {
      // El producto ya existe en la lista de favoritos
      console.log('El producto ya está en la lista de favoritos.');
    }
  }
  isFavorite(product: any): boolean {
    return this.favorites.some((fav: any) => fav.id === product.id);
  }
}
