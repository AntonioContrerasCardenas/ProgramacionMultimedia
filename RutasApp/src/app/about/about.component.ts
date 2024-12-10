import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  public name: string = '';
  private authService = inject(AuthService);
  private router = inject(Router);
  // private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.name = this.authService.getUsername();
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
    // this.route.params.subscribe((p) => {
    //   p['id'];
    // });
  }
}
