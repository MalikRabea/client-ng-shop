import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featuredProducts = [
    { name: 'Smartphone', price: "%25", image: 'https://themewagon.github.io/MiniStore/images/product-item4.jpg' },
    { name: 'Laptop', price: "%11", image: 'https://m.media-amazon.com/images/I/61LdecwlWYL.jpg' },
    { name: 'Headphones', price: "%18", image: 'https://img.freepik.com/premium-photo/headphones-connected-smartphone-pink-blue-background_175682-4238.jpg' },
    { name: 'Smart Watch', price: "%10", image: 'https://themewagon.github.io/MiniStore/images/product-item7.jpg' },
    { name: 'Gaming Console', price: "%15", image: 'https://img.choice.com.au/-/media/8dde4d457b924083b0547305a77ebfe9.ashx' },
    { name: 'Camera', price: "%22", image: 'https://i5.walmartimages.com/asr/f7837d96-46a9-4a93-b2ae-7aae9d4a34b7.ee7886a1edadebb5617039a832aef144.jpeg' },
    { name: 'Tablet', price: "%20", image: 'https://m.media-amazon.com/images/I/71pMKb47muL._AC_SL1500_.jpg' },
  ];

  email: string = '';
  heroTitle = 'Discover the Latest Electronics';
  heroSubtitle = 'High-quality gadgets at unbeatable prices.';
  heroImage = 'https://themewagon.github.io/MiniStore/images/banner-image.png';

  ngOnInit() {}

  subscribeNewsletter() {
    if (!this.email.trim()) return;
    alert(`Subscribed with: ${this.email}`);
    this.email = '';
  }
}
