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
import { Router } from '@angular/router';


interface City {
    name: string;
    code: string;
}

@Component({
  selector: 'app-register',
  imports: [SelectModule, InputGroupModule, InputNumberModule, InputTextModule, FormsModule,
    InputGroupAddonModule,ReactiveFormsModule,ButtonModule,FloatLabelModule,CheckboxModule,MessageModule,RouterLink
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})

export class Register {
  private router = inject(Router);
  isLoading: boolean = false;
   name!:FormControl
   email!:FormControl
   password!:FormControl
   phone!:FormControl
   registrationForm!:FormGroup
   constructor(private cdr: ChangeDetectorRef){
    this.initFormControls()
    this.initFormGroup()
   }


   initFormControls():void{
    this.name=new FormControl('',[Validators.required,Validators.minLength(3),
    Validators.maxLength(20)]);
    this.email=new FormControl('',[Validators.required,Validators.email]);
    this.password=new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(15),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/)
    ]);
    this.phone=new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{9,15}$/)])
   }
   initFormGroup():void{
    this.registrationForm=new FormGroup({
      name:this.name,
      email:this.email,
      password:this.password,
      phone:this.phone

    })
   }
   ngAfterViewInit() {
    setTimeout(() => {
      this.cdr.detectChanges();
    }, 0);
  }
   onlyNumbers(event: Event): void {
  const input = event.target as HTMLInputElement;
  const cleanValue = input.value.replace(/[^0-9]/g, '');

  input.value = cleanValue;
  this.registrationForm.get('phone')?.setValue(cleanValue, { emitEvent: false });
}
submit(): void {
    if (this.registrationForm.valid) {
      this.isLoading = true;
      console.log('Registration Data:', this.registrationForm.value);

      setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['/login']);
      }, 1500);

    } else {
      this.registrationForm.markAllAsTouched();
    }
  }

}
