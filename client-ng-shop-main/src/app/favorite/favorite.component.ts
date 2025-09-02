// favorite.component.ts
import { Component, OnInit } from '@angular/core';
import { FavoriteService } from './favorite.service';
import { BasketService } from '../basket/basket.service';
import { Product } from '../shared/Models/Favorites';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  favorites: Product[] = [];
  username: string | null = null;

  constructor(
    private favoriteService: FavoriteService,
    private basketService: BasketService,
    private coreService: CoreService
  ) {}

  ngOnInit(): void {
    // الاشتراك على اسم المستخدم من CoreService
    this.coreService.userName$.subscribe(username => {
      this.username = username;
      if (!username) return;

      this.loadFavorites(username);
    });
  }

  loadFavorites(username: string) {
    this.favoriteService.getFavorites(username).subscribe({
      next: (data: Product[]) => {
        this.favorites = data;
        this.favoriteService.setFavoriteCount(this.favorites.length); // تحديث badge
        console.log('Favorites loaded:', this.favorites);
      },
      error: (err) => console.error(err)
    });
  }

  removeFavorite(productId: number) {
    if (!this.username) return;

    this.favoriteService.removeFromFavorites(productId, this.username).subscribe({
      next: () => {
        this.favorites = this.favorites.filter(p => p.id !== productId);
        this.favoriteService.setFavoriteCount(this.favorites.length); // تحديث badge
      },
      error: (err) => console.error(err)
    });
  }

  // addToBasket(product: Product) {
  //   this.basketService.addItemToBasket(product);
  // }

  getArrayofRating(rate: number): number[] {
    return Array(rate).fill(0).map((_, i) => i);
  }
}
