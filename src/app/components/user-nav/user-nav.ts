import { Component,ChangeDetectorRef,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { AuthService } from '../../core/service/auth';

@Component({
  selector: 'app-user-nav',
  standalone: true,
  imports: [CommonModule, ButtonModule,MenuModule],
  templateUrl: './user-nav.html',
  styleUrls: ['./user-nav.css']
})
export class UserNav {
  public authService = inject(AuthService);
    private router = inject(Router);
    accountMenuItems: MenuItem[] = [
    {
      label: 'My Profile',
      icon: 'pi pi-user',
      command: () => this.router.navigate(['/user/profile'])
    },
    {
      separator: true
    },
    {
      label: 'Logout',
      icon: 'pi pi-sign-out',
      styleClass: 'logout-item',
      command: () => this.logout()
    }
  ];
  menuItems = ['Home', 'Shop', 'Categories', 'ContactUs'];
  activeItem = 'Home';
  isDarkMode = false;
  isMenuOpen = false;

  setActive(item: string) {
    this.activeItem = item;
    this.isMenuOpen = false;
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  // logout(): void {
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('userEmail');
  //   this.router.navigate(['/login']);
  // }
onAccountClick(event: Event, menu: any): void {
    if (this.authService.isLoggedIn()) {
      menu.toggle(event);
    } else {
      this.router.navigate(['/login']); 
    }
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
