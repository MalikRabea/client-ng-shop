import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { BasketService } from '../../basket/basket.service';
import { Observable } from 'rxjs';
import { IBasket } from '../../shared/Models/Basket';
import { CoreService } from '../core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent implements OnInit {
  userName: string = '';
  visibale: boolean = false;
  count: Observable<IBasket>;

  @ViewChild('dropdown') dropdown!: ElementRef;

  constructor(
    private basketService: BasketService,
    private coreService: CoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const basketId = localStorage.getItem('basketId');

    this.basketService.GetBasket(basketId).subscribe({
      next: () => {
        this.count = this.basketService.basket$;
      },
      error(err) {
        console.log(err);
      },
    });

    // جلب اسم المستخدم وتحديث الـ BehaviorSubject
    this.coreService.getUserName().subscribe();
    this.coreService.userName$.subscribe(value => {
      this.userName = value;
    });
  }

  logout() {
    this.coreService.logout().subscribe({
      next: () => {
        this.router.navigateByUrl('/'); // بعد logout نرجع للصفحة الرئيسية
      },
      error: (err) => console.error("Logout failed", err)
    });
  }

  ToggleDropDown() {
    this.visibale = !this.visibale;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (this.visibale && this.dropdown && !this.dropdown.nativeElement.contains(event.target)) {
      this.visibale = false;
    }
  }
}
