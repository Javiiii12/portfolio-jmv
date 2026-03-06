import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './features/hero/hero.component';
import { SkillsCertsComponent } from './features/skills-certs/skills-certs.component';
import { ExperienceEducationComponent } from './features/experience-education/experience-education.component';
import { ProjectsGridComponent } from './features/projects-grid/projects-grid.component';
import { ContactFooterComponent } from './features/contact-footer/contact-footer.component';
import { NavbarComponent } from './features/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HeroComponent, SkillsCertsComponent, ProjectsGridComponent, ExperienceEducationComponent, ContactFooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-jmv');
}
