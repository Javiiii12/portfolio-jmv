import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './features/hero/hero.component';
import { SkillsCertsComponent } from './features/skills-certs/skills-certs.component';
import { ExperienceEducationComponent } from './features/experience-education/experience-education.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroComponent, SkillsCertsComponent, ExperienceEducationComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-jmv');
}
