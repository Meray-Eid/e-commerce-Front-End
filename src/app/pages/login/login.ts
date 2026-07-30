import { Component,ChangeDetectorRef,inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CheckboxModule } from 'primeng/checkbox';
import { MessageModule } from 'primeng/message';
import { RouterLink } from '@angular/router';
import { Router} from '@angular/router';
import { AuthService } from '../../core/service/auth';
interface City {
    name: string;
    code: string;
}

@Component({
  selector: 'app-login',
  imports: [SelectModule, InputGroupModule, InputNumberModule, InputTextModule, FormsModule,
    InputGroupAddonModule,ReactiveFormsModule,ButtonModule,FloatLabelModule,CheckboxModule,MessageModule,RouterLink
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {
  private authService = inject(AuthService);
    private router = inject(Router);
  isLoading: boolean = false;
   email!:FormControl
   password!:FormControl
   loginForm!:FormGroup
   constructor(private cdr: ChangeDetectorRef){
    this.initFormControls()
    this.initFormGroup()
   }

   initFormControls():void{

    this.email=new FormControl('',[Validators.required,Validators.email]);
    this.password=new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(15),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/)
    ]);
   }
   initFormGroup():void{
    this.loginForm=new FormGroup({
      email:this.email,
      password:this.password,
    })
   }
   ngAfterViewInit() {
    setTimeout(() => {
      this.cdr.detectChanges();
    }, 0);
  }

   onlyNumbers(event: Event): void {
  const input = event.target as HTMLInputElement;
  const cleanValue = input.value.replace(/[^0-9]/g,'');

  input.value = cleanValue;
  this.loginForm.get('phone')?.setValue(cleanValue, { emitEvent: false });
}

submit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;

      setTimeout(() => {
        this.isLoading = false;

        this.authService.loginDummy();

        this.router.navigate(['/home']);
      }, 1000);

    } else {
      this.loginForm.markAllAsTouched();
    }}
}
