import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: boolean = false;
  title = 'cGallery';

  constructor(public authService: AuthService) {
    this.isLoggedIn = this.authService.getIsLoggedIn();
  }
}

