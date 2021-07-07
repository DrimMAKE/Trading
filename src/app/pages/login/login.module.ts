import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { MatInputModule, MatFormFieldModule, MatCheckboxModule, MatButtonModule } from '../../../../node_modules/@angular/material';

export const routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent]
})

export class LoginModule { }