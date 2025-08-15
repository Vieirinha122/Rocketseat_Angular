import { Component, signal } from '@angular/core';
import { Navbar } from './_components/navbar/navbar';
import { PrimaryButton } from './_components/primary-button/primary-button';

@Component({
  selector: 'app-root',
  imports: [Navbar, PrimaryButton],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'gerador-certificado';
  exibeNavbar: boolean = false;
}
