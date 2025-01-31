import { Component , HostListener} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  activeSection: string = '';

  // Scroll event listener to check the scroll position
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const sections = ['home','  about', 'experience', 'services', 'skills', 'projects', 'contact'];

    // Get the scroll position
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Loop through each section and find which one is in view
    for (let section of sections) {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection = section;  // Set the active section
          break;
        }
      }
    }
  }
}
