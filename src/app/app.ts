import { Component, signal } from '@angular/core';
import { Navbar } from './_components/navbar/navbar';
import { PrimaryButton } from './_components/primary-button/primary-button';
import { SecondaryButton } from './_components/secondary-button/secondary-button';
import { ItemCertificado } from './_components/item-certificado/item-certificado';

@Component({
  selector: 'app-root',
  imports: [Navbar, PrimaryButton, SecondaryButton, ItemCertificado],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'gerador-certificado';
  exibeNavbar: boolean = false;
}
