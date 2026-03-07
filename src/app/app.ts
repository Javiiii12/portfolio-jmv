import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactFooterComponent } from './features/contact-footer/contact-footer.component';
import { NavbarComponent } from './features/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ContactFooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-jmv');
}
