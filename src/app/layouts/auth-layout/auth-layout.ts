import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthNav } from '../../components/auth-nav/auth-nav';
import { AuthFooter } from '../../components/auth-footer/auth-footer';
import { UserFooter } from "../../components/user-footer/user-footer";
import { UserNav } from "../../components/user-nav/user-nav";
@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, AuthNav, AuthFooter, UserFooter, UserNav],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.css',
})
export class AuthLayout {}
