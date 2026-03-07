import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { SkillsCertsComponent } from '../skills-certs/skills-certs.component';
import { ExperienceEducationComponent } from '../experience-education/experience-education.component';
import { ProjectsGridComponent } from '../projects-grid/projects-grid.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, SkillsCertsComponent, ProjectsGridComponent, ExperienceEducationComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home { }
