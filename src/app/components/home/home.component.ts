import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ExperienceComponent } from '../experience/experience.component';
import { RouterOutlet } from '@angular/router';
import { ServicesComponent } from "../services/services.component";
import { SkillsComponent } from "../skills/skills.component";
import { ToolsComponent } from "../tools/tools.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, AboutComponent, ExperienceComponent, ServicesComponent, SkillsComponent, ToolsComponent, ProjectsComponent, ContactComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
