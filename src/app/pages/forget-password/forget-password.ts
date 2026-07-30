import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/service/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './forget-password.html',
  styleUrl:'./forget-password.css'
})
export class ForgetPassword {
  successMessage = '';
  errorMessage = '';
  isLoading = false;
  private router = inject(Router);
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);

  forgotPasswordForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });

onSubmit(): void {
    if (this.forgotPasswordForm.invalid) return;

    this.isLoading = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.authService.forgotPassword(this.forgotPasswordForm.value.email).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.successMessage = 'Check your email! We sent you a password reset link.';

        // 👈 3. التوجيه لصفحة الـ Login بعد 3 ثوانٍ
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = 'Something went wrong. Please try again.';
      }
    });
  }
}
