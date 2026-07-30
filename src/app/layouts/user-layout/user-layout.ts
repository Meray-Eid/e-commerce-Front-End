import { Component } from '@angular/core';
import { Home } from "../../pages/home/home";
import { UserNav } from '../../components/user-nav/user-nav';
import { UserFooter } from '../../components/user-footer/user-footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  imports: [Home, UserNav, UserFooter, RouterOutlet],
  templateUrl: './user-layout.html',
  styleUrl: './user-layout.css',
})
export class UserLayout {}
